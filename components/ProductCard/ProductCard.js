import clsx from 'clsx';
import { localizeProduct } from '@/lib/products';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, locale, verMasLabel }) {
  const p = localizeProduct(product, locale);
  return (
    <article className={clsx(styles.card, product.featured && styles.featured)}>
      <div className={clsx(styles.image, styles.photoWrap)}>
        <img src={p.image} alt={p.title} loading="lazy" className={styles.photo} />
      </div>
      <div className={styles.body}>
        {p.family && <span className={styles.familyBadge}>{p.family}</span>}
        <div className={styles.titleRow}>
          <h3>{p.title}</h3>
          <span className={styles.price}>
            <strong>{p.price}</strong>
            {p.saleStatus && <em>{p.saleStatus}</em>}
          </span>
        </div>
        <p className={styles.description}>{p.description}</p>
        <a
          className={styles.detailsBtn}
          href={p.href || '#'}
          target={p.href ? '_blank' : undefined}
          rel={p.href ? 'noopener' : undefined}
        >
          {verMasLabel}
        </a>
      </div>
    </article>
  );
}
