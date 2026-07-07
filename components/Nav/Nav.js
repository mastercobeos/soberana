'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { getMessages } from '@/lib/utils';
import { otherLocale } from '@/lib/i18n';
import { useCart } from '@/components/Cart/CartContext';
import { getCartMessages } from '@/lib/cartMessages';
import styles from './Nav.module.css';

function CartButton({ locale, className }) {
  const { getTotalItems, openCart, addPulse } = useCart();
  const tc = getCartMessages(locale);
  const [flash, setFlash] = useState(false);
  const count = getTotalItems();

  useEffect(() => {
    if (addPulse === 0) return;
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 1200);
    return () => clearTimeout(timer);
  }, [addPulse]);

  return (
    <button
      type="button"
      className={clsx(styles.cartBtn, flash && styles.cartFlash, className)}
      onClick={openCart}
      aria-label={tc.openCart}
    >
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {count > 0 && <span className={styles.cartCount}>{count}</span>}
    </button>
  );
}

export default function Nav({ locale }) {
  const t = getMessages(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const base = `/${locale}`;
  const path = (segment) => `${base}${segment}`;
  const home = (hash) => `${base}${hash || ''}`;

  const other = otherLocale(locale);
  const otherLocalePath = pathname.replace(`/${locale}`, `/${other}`) || `/${other}`;

  const activeProducts = ['paneles', 'paquetes', 'baterias', 'inteligentes'].some((seg) =>
    pathname.includes(`/${seg}`)
  );

  const isActive = (seg) => pathname.endsWith(`/${seg}`);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (currentY <= 10) setHidden(false);
          else if (currentY > lastY + 6) setHidden(true);
          else if (currentY < lastY - 6) setHidden(false);
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProdOpen(false);
  }, [pathname]);

  return (
    <nav className={clsx(styles.nav, open && styles.open, hidden && styles.navHidden)}>
      <div className={clsx('container', styles.inner)}>
        <Link className={styles.brand} href={home('#inicio')}>
          <span className={styles.brandMark}>
            <Image
              src="/assets/hojita-removebg-preview.png"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
            />
          </span>
          <span>Soberana Solutions</span>
        </Link>

        <CartButton locale={locale} className={styles.cartBtnMobile} />

        <button
          className={styles.toggle}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={styles.menu} id="navMenu">
          <div className={styles.links}>
            <Link href={home('#categorias')}>{t.navCategories}</Link>
            <Link href={home('#modelos')}>{t.navModels}</Link>
            <Link href={home('#recomendador')}>{t.navRecommendations}</Link>
            <div
              className={clsx(styles.dropdown, prodOpen && styles.dropdownOpen)}
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => setProdOpen(false)}
              onFocus={() => setProdOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setProdOpen(false);
              }}
            >
              <button
                className={clsx(
                  styles.dropdownButton,
                  activeProducts && styles.active
                )}
                type="button"
                aria-haspopup="true"
                aria-expanded={prodOpen}
                onClick={() => setProdOpen((v) => !v)}
              >
                {t.navProducts}
              </button>
              <div className={styles.dropdownMenu}>
                <Link className={clsx(isActive('paneles') && styles.active)} href={path('/paneles')} onClick={() => setProdOpen(false)}>
                  {locale === 'es' ? 'Paneles' : 'Panels'}
                </Link>
                <Link className={clsx(isActive('paquetes') && styles.active)} href={path('/paquetes')} onClick={() => setProdOpen(false)}>
                  {locale === 'es' ? 'Paquetes' : 'Bundles'}
                </Link>
                <Link className={clsx(isActive('baterias') && styles.active)} href={path('/baterias')} onClick={() => setProdOpen(false)}>
                  {locale === 'es' ? 'Baterías' : 'Batteries'}
                </Link>
                <Link className={clsx(isActive('inteligentes') && styles.active)} href={path('/inteligentes')} onClick={() => setProdOpen(false)}>
                  {locale === 'es' ? 'Inteligentes' : 'Smart'}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <CartButton locale={locale} className={styles.cartBtnDesktop} />
            <Link
              className={styles.langToggle}
              href={otherLocalePath}
              aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              {other.toUpperCase()}
            </Link>
            <Link className={styles.cta} href={home('#modelos')}>
              {t.navViewModels}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
