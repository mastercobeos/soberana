'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import { useCart } from '@/components/Cart/CartContext';
import { getCartMessages } from '@/lib/cartMessages';
import styles from './CheckoutForm.module.css';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

// Blue card icon + orange focus/selected accents on lighter, legible inputs.
const APPEARANCE = {
  theme: 'night',
  variables: {
    colorPrimary: '#f7a83c',
    colorBackground: '#1c3527',
    colorText: '#ffffff',
    colorTextSecondary: 'rgba(255, 255, 255, 0.7)',
    colorTextPlaceholder: 'rgba(255, 255, 255, 0.42)',
    colorDanger: '#ff7b7b',
    borderRadius: '12px',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
  },
  rules: {
    '.Input': {
      backgroundColor: '#22402f',
      border: '1px solid rgba(255, 255, 255, 0.16)',
      color: '#ffffff'
    },
    '.Input:focus': {
      border: '1px solid #f7a83c',
      boxShadow: '0 0 0 1px #f7a83c'
    },
    '.Label': {
      color: 'rgba(255, 255, 255, 0.78)'
    },
    '.Tab': {
      backgroundColor: '#22402f',
      border: '1px solid rgba(255, 255, 255, 0.16)'
    },
    '.Tab:hover': {
      backgroundColor: '#284a37'
    },
    '.Tab--selected': {
      backgroundColor: '#284a37',
      border: '1px solid #f7a83c'
    },
    '.TabIcon': {
      color: '#58bdf7'
    },
    '.TabIcon--selected': {
      color: '#58bdf7'
    }
  }
};

function PaymentForm({ locale, t }) {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setSubmitting(true);
    setError('');
    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/${locale}/gracias`,
        receipt_email: email || undefined,
        shipping: {
          name,
          phone,
          address: {
            line1,
            city,
            state,
            postal_code: postal,
            country: 'MX'
          }
        }
      }
    });
    // Only reached on immediate failure (e.g. card declined); otherwise
    // Stripe redirects to return_url.
    if (confirmError) {
      setError(confirmError.message || t.paymentSetupError);
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.paymentForm} onSubmit={handleSubmit}>
      <h3 className={styles.formSection}>{t.shippingTitle}</h3>
      <div className={styles.field}>
        <label htmlFor="checkout-email" className={styles.fieldLabel}>
          {t.emailLabel}
        </label>
        <input
          id="checkout-email"
          type="email"
          required
          className={styles.input}
          placeholder="tu@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="checkout-name" className={styles.fieldLabel}>
          {t.nameLabel}
        </label>
        <input
          id="checkout-name"
          type="text"
          required
          autoComplete="name"
          className={styles.input}
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="checkout-line1" className={styles.fieldLabel}>
          {t.addressLabel}
        </label>
        <input
          id="checkout-line1"
          type="text"
          required
          autoComplete="address-line1"
          className={styles.input}
          placeholder={t.addressPlaceholder}
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="checkout-city" className={styles.fieldLabel}>
            {t.cityLabel}
          </label>
          <input
            id="checkout-city"
            type="text"
            required
            autoComplete="address-level2"
            className={styles.input}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="checkout-state" className={styles.fieldLabel}>
            {t.stateLabel}
          </label>
          <input
            id="checkout-state"
            type="text"
            required
            autoComplete="address-level1"
            className={styles.input}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="checkout-postal" className={styles.fieldLabel}>
            {t.postalLabel}
          </label>
          <input
            id="checkout-postal"
            type="text"
            inputMode="numeric"
            required
            autoComplete="postal-code"
            className={styles.input}
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="checkout-phone" className={styles.fieldLabel}>
            {t.phoneLabel}
          </label>
          <input
            id="checkout-phone"
            type="tel"
            required
            autoComplete="tel"
            className={styles.input}
            placeholder="55 1234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <h3 className={styles.formSection}>{t.paymentTitle}</h3>
      <PaymentElement options={{ wallets: { applePay: 'never', googlePay: 'never' } }} />
      {error && <p className={styles.error} role="alert">{error}</p>}
      <div className={styles.payActions}>
        <button
          type="submit"
          className={styles.payBtn}
          disabled={!stripe || submitting}
        >
          {submitting ? t.processing : t.payNow}
        </button>
        <span className={styles.stripeBadge}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
          </svg>
          Powered by <strong>Stripe</strong>
        </span>
      </div>
      <p className={styles.note}>{t.paymentNote}</p>
      <p className={styles.consent}>
        {t.consentPrefix}{' '}
        <Link href={`/${locale}/terminos-condiciones`} target="_blank" rel="noopener">
          {t.termsLink}
        </Link>{' '}
        {t.consentAnd}{' '}
        <Link href={`/${locale}/aviso-privacidad`} target="_blank" rel="noopener">
          {t.privacyLink}
        </Link>.
      </p>
    </form>
  );
}

// Self-contained checkout: creates the PaymentIntent from the current cart
// and renders the delivery + payment form. Works inside the cart drawer or
// on the /checkout page.
export default function CheckoutForm({ locale }) {
  const { items } = useCart();
  const t = getCartMessages(locale);
  const [clientSecret, setClientSecret] = useState('');
  const [setupError, setSetupError] = useState('');

  // Re-create the PaymentIntent whenever the cart contents change so the
  // charged amount always matches the summary shown.
  const cartKey = JSON.stringify(items);
  useEffect(() => {
    if (items.length === 0) return;
    let cancelled = false;
    setClientSecret('');
    setSetupError('');
    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'checkout failed');
        if (!cancelled) setClientSecret(data.clientSecret);
      })
      .catch(() => {
        if (!cancelled) setSetupError(t.paymentSetupError);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartKey]);

  if (setupError) return <p className={styles.error} role="alert">{setupError}</p>;
  if (!clientSecret) return <p className={styles.loading}>{t.loadingPayment}</p>;
  if (!stripePromise) return <p className={styles.error}>{t.paymentSetupError}</p>;

  return (
    <Elements
      key={clientSecret}
      stripe={stripePromise}
      options={{ clientSecret, appearance: APPEARANCE, locale }}
    >
      <PaymentForm locale={locale} t={t} />
    </Elements>
  );
}
