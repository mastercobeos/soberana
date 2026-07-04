'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { getMessages } from '@/lib/utils';
import { otherLocale } from '@/lib/i18n';
import styles from './Nav.module.css';

export default function Nav({ locale }) {
  const t = getMessages(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
            <div className={styles.dropdown}>
              <button
                className={clsx(
                  styles.dropdownButton,
                  activeProducts && styles.active
                )}
                type="button"
                aria-haspopup="true"
              >
                {t.navProducts}
              </button>
              <div className={styles.dropdownMenu}>
                <Link className={clsx(isActive('paneles') && styles.active)} href={path('/paneles')}>
                  {locale === 'es' ? 'Paneles' : 'Panels'}
                </Link>
                <Link className={clsx(isActive('paquetes') && styles.active)} href={path('/paquetes')}>
                  {locale === 'es' ? 'Paquetes' : 'Bundles'}
                </Link>
                <Link className={clsx(isActive('baterias') && styles.active)} href={path('/baterias')}>
                  {locale === 'es' ? 'Baterías' : 'Batteries'}
                </Link>
                <Link className={clsx(isActive('inteligentes') && styles.active)} href={path('/inteligentes')}>
                  {locale === 'es' ? 'Inteligentes' : 'Smart'}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
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
