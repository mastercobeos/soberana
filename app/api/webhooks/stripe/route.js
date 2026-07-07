import Stripe from 'stripe';
import { findProductBySlug, localizeProduct } from '@/lib/products';
import { formatMXN } from '@/lib/utils';

// Confirms payments asynchronously (required for OXXO/SPEI, which settle
// hours after checkout). Register this endpoint in the Stripe dashboard and
// set STRIPE_WEBHOOK_SECRET; locally use `stripe listen`.

function describeOrder(intent) {
  const lines = [];
  try {
    const items = JSON.parse(intent.metadata?.items || '[]');
    for (const item of items) {
      const product = findProductBySlug(item.slug);
      const title = product ? localizeProduct(product, 'es').title : item.slug;
      lines.push(`• ${item.quantity} × ${title}`);
    }
  } catch {}
  return lines.join('\n');
}

async function notifyTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });
  } catch (err) {
    console.error('Telegram notification failed:', err);
  }
}

function saleMessage(intent, status) {
  const s = intent.shipping;
  const addr = s?.address;
  const parts = [
    status === 'ok' ? '💰 VENTA CONFIRMADA — Soberana Solutions' : '⚠️ PAGO FALLIDO — Soberana Solutions',
    '',
    describeOrder(intent),
    '',
    `Total: ${formatMXN(intent.amount)} MXN`,
    ''
  ];
  if (s?.name) parts.push(`Cliente: ${s.name}`);
  if (s?.phone) parts.push(`Tel: ${s.phone}`);
  if (intent.receipt_email) parts.push(`Email: ${intent.receipt_email}`);
  if (addr) {
    parts.push(
      `Entrega: ${[addr.line1, addr.line2, addr.city, addr.state, addr.postal_code]
        .filter(Boolean)
        .join(', ')}`
    );
  }
  parts.push('', `Stripe: https://dashboard.stripe.com/payments/${intent.id}`);
  return parts.filter((p) => p !== null).join('\n');
}

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response('Webhook not configured', { status: 500 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const signature = request.headers.get('stripe-signature');
  const payload = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    return new Response('Invalid signature', { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const intent = event.data.object;
      console.log(`[stripe] Payment succeeded: ${intent.id} — ${formatMXN(intent.amount)} MXN`);
      await notifyTelegram(saleMessage(intent, 'ok'));
      break;
    }
    case 'payment_intent.payment_failed': {
      const intent = event.data.object;
      console.log(`[stripe] Payment failed: ${intent.id}`, intent.last_payment_error?.message);
      await notifyTelegram(saleMessage(intent, 'failed'));
      break;
    }
    default:
      break;
  }

  return Response.json({ received: true });
}
