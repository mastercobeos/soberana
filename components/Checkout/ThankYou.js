'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/components/Cart/CartContext';
import { getCartMessages } from '@/lib/cartMessages';
import styles from './ThankYou.module.css';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

export default function ThankYou({ locale }) {
  const { clearCart } = useCart();
  const t = getCartMessages(locale);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );
    if (!clientSecret || !stripePromise) {
      setStatus('failed');
      return;
    }
    stripePromise
      .then((stripe) => stripe.retrievePaymentIntent(clientSecret))
      .then(({ paymentIntent }) => {
        const s = paymentIntent?.status;
        if (s === 'succeeded') {
          setStatus('succeeded');
          clearCart();
        } else if (s === 'processing' || s === 'requires_action') {
          // OXXO/SPEI stay pending until the customer pays the voucher.
          setStatus('processing');
          clearCart();
        } else {
          setStatus('failed');
        }
      })
      .catch(() => setStatus('failed'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'loading') return null;

  const copy = {
    succeeded: { title: t.thanksTitle, body: t.thanksBody, ok: true },
    processing: { title: t.thanksProcessing, body: t.thanksProcessingBody, ok: true },
    failed: { title: t.thanksFailedTitle, body: t.thanksFailedBody, ok: false }
  }[status];

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.card}>
        <span className={clsx(styles.icon, !copy.ok && styles.iconFail)} aria-hidden="true">
          {copy.ok ? '✓' : '✕'}
        </span>
        <h1 className={styles.title}>{copy.title}</h1>
        <p className={styles.body}>{copy.body}</p>
        <div className={styles.actions}>
          <Link className={styles.homeBtn} href={`/${locale}`}>
            {t.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
