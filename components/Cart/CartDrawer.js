'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useCart } from './CartContext';
import { findProductBySlug, localizeProduct } from '@/lib/products';
import { formatMXN } from '@/lib/utils';
import { getCartMessages } from '@/lib/cartMessages';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import styles from './CartDrawer.module.css';

export default function CartDrawer({ locale }) {
  const {
    items,
    removeItem,
    updateQuantity,
    getTotalCents,
    isCartOpen,
    closeCart
  } = useCart();
  const t = getCartMessages(locale);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const showCheckout = checkoutOpen && items.length > 0;

  const handleClose = () => {
    closeCart();
    setCheckoutOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <aside
        className={clsx(styles.panel, showCheckout && styles.panelWide)}
        role="dialog"
        aria-label={showCheckout ? t.checkoutTitle : t.cartTitle}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>{showCheckout ? t.checkoutTitle : t.cartTitle}</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label={t.closeCart}
          >
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className={styles.empty}>{t.emptyCart}</p>
        ) : showCheckout ? (
          <div className={styles.checkoutBody}>
            <div className={styles.checkoutTotal}>
              <span>{t.total}</span>
              <strong>{formatMXN(getTotalCents())}</strong>
            </div>
            <CheckoutForm locale={locale} />
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => {
                const product = findProductBySlug(item.slug);
                if (!product) return null;
                const p = localizeProduct(product, locale);
                return (
                  <li key={item.slug} className={styles.item}>
                    <button
                      type="button"
                      className={styles.removeX}
                      onClick={() => removeItem(item.slug)}
                      aria-label={`${t.removeItem} ${p.title}`}
                    >
                      ×
                    </button>
                    <Image src={p.image} alt={p.title} width={76} height={76} className={styles.thumb} />
                    <div className={styles.itemInfo}>
                      <span className={styles.itemTitle}>{p.title}</span>
                      <span className={styles.itemPrice}>
                        {formatMXN(product.priceCents)}
                      </span>
                      <div className={styles.itemControls}>
                        <div
                          className={styles.qty}
                          role="group"
                          aria-label={t.quantity}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            aria-label="−"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            aria-label="+"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <footer className={styles.footer}>
              <div className={styles.totalRow}>
                <span>{t.total}</span>
                <strong>{formatMXN(getTotalCents())}</strong>
              </div>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.checkoutBtn}
                  onClick={() => setCheckoutOpen(true)}
                >
                  {t.checkout}
                </button>
              </div>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
