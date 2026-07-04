import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ locale }) {
  const isEs = locale === 'es';
  const base = `/${locale}`;
  const p = (seg) => `${base}${seg}`;

  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p>
            {isEs
              ? 'Soluciones EcoFlow para respaldo, energía portátil, paneles solares, baterías y paquetes comerciales.'
              : 'EcoFlow solutions for backup power, portable energy, solar panels, batteries, and commercial bundles.'}
          </p>
        </div>
        <div className={styles.col}>
          <h3>{isEs ? 'Catálogo' : 'Catalog'}</h3>
          <Link href={p('/#modelos')}>{isEs ? 'Estaciones' : 'Stations'}</Link>
          <Link href={p('/paneles')}>{isEs ? 'Paneles' : 'Panels'}</Link>
          <Link href={p('/baterias')}>{isEs ? 'Baterías' : 'Batteries'}</Link>
          <Link href={p('/paquetes')}>{isEs ? 'Paquetes' : 'Bundles'}</Link>
        </div>
        <div className={styles.col}>
          <h3>{isEs ? 'Productos' : 'Products'}</h3>
          <Link href={p('/inteligentes')}>{isEs ? 'Inteligentes' : 'Smart'}</Link>
          <Link href={p('/#recomendador')}>{isEs ? 'Recomendaciones' : 'Recommendations'}</Link>
          <Link href={p('/#comparador')}>{isEs ? 'Comparador' : 'Comparator'}</Link>
        </div>
        <div className={styles.col}>
          <h3>Legal</h3>
          <Link href={p('/aviso-privacidad')}>
            {isEs ? 'Aviso de privacidad' : 'Privacy notice'}
          </Link>
          <Link href={p('/terminos-condiciones')}>
            {isEs ? 'Términos y condiciones' : 'Terms and conditions'}
          </Link>
          <span>
            {isEs ? 'Precios sujetos a disponibilidad.' : 'Prices subject to availability.'}
          </span>
          <span>{isEs ? 'Atención en México.' : 'Serving Mexico.'}</span>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>
          {isEs
            ? '© 2026. Todos los derechos reservados.'
            : '© 2026. All rights reserved.'}
        </span>
        <span>
          {isEs
            ? 'Catálogo informativo. Validar compatibilidad antes de compra o instalación.'
            : 'Informational catalog. Verify compatibility before purchase or installation.'}
        </span>
      </div>
    </footer>
  );
}
