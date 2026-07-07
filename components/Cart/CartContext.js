'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { findProductBySlug } from '@/lib/products';

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CART_STORAGE_KEY = 'soberana-cart';

// Items are stored as { slug, quantity }; product data (price, title, image)
// is always resolved from lib/products so localStorage never holds stale prices.
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addPulse, setAddPulse] = useState(0);

  // Load cart from localStorage after mount (avoids SSR hydration mismatch)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setItems(parsed.filter((i) => findProductBySlug(i.slug)));
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (slug, qty = 1) => {
    if (!findProductBySlug(slug)) return;
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { slug, quantity: qty }];
    });
    setAddPulse((n) => n + 1);
  };

  const removeItem = (slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const updateQuantity = (slug, quantity) => {
    if (quantity <= 0) {
      removeItem(slug);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const getTotalCents = () =>
    items.reduce((sum, item) => {
      const product = findProductBySlug(item.slug);
      return product ? sum + product.priceCents * item.quantity : sum;
    }, 0);

  const getTotalItems = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalCents,
        getTotalItems,
        isCartOpen,
        openCart,
        closeCart,
        addPulse
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
