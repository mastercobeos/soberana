'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useCart } from './CartContext';
import { getCartMessages } from '@/lib/cartMessages';
import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ slug, locale }) {
  const { addItem, openCart } = useCart();
  const t = getCartMessages(locale);
  const [added, setAdded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleClick = () => {
    addItem(slug);
    openCart();
    setAdded(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      className={clsx(styles.addBtn, added && styles.added)}
      onClick={handleClick}
    >
      {added ? t.added : t.addToCart}
    </button>
  );
}
