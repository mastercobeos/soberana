import Stripe from 'stripe';
import { findProductBySlug } from '@/lib/products';

const MAX_QTY_PER_ITEM = 20;

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json(
      { error: 'Stripe is not configured (missing STRIPE_SECRET_KEY).' },
      { status: 500 }
    );
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const items = Array.isArray(body?.items) ? body.items : [];
  if (items.length === 0) {
    return Response.json({ error: 'Cart is empty.' }, { status: 400 });
  }

  // Amount is always computed server-side from the catalog; the client only
  // sends slugs and quantities.
  let amount = 0;
  const lineSummary = [];
  for (const item of items) {
    const product = findProductBySlug(item?.slug);
    const quantity = Number.parseInt(item?.quantity, 10);
    if (!product || !Number.isFinite(quantity) || quantity < 1 || quantity > MAX_QTY_PER_ITEM) {
      return Response.json({ error: `Invalid cart item: ${item?.slug}` }, { status: 400 });
    }
    amount += product.priceCents * quantity;
    lineSummary.push(`${quantity}x ${product.slug}`);
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'mxn',
      // Explicit card-only: keeps Stripe Link (the "save my info for faster
      // payment" box) out of the Payment Element.
      payment_method_types: ['card'],
      // Meses sin intereses (MX installments): Stripe surfaces eligible plans
      // (3/6/9/12/18/24 months) in the Payment Element once the customer enters
      // a supported Mexican consumer credit card. Ineligible cards (debit,
      // corporate, foreign) simply pay in full — no downside. Stripe enforces
      // per-plan minimum amounts and adds the installment fee automatically.
      payment_method_options: {
        card: { installments: { enabled: true } }
      },
      description: `Soberana Solutions: ${lineSummary.join(', ')}`,
      metadata: {
        items: JSON.stringify(items.map((i) => ({ slug: i.slug, quantity: i.quantity }))).slice(0, 500)
      }
    });
    return Response.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe PaymentIntent error:', err);
    return Response.json({ error: 'Could not create payment.' }, { status: 502 });
  }
}
