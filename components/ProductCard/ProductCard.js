import clsx from 'clsx';
import Image from 'next/image';
import { localizeProduct } from '@/lib/products';
import AddToCartButton from '@/components/Cart/AddToCartButton';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, locale }) {
  const p = localizeProduct(product, locale);
  return (
    <article className={clsx(styles.card, product.featured && styles.featured)}>
      <div className={clsx(styles.image, styles.photoWrap)}>
        <Image
          src={p.image}
          alt={p.title}
          width={640}
          height={480}
          sizes="(max-width: 650px) 220px, 320px"
          className={styles.photo}
        />
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
        <div className={styles.buttonRow}>
          <AddToCartButton slug={product.slug} locale={locale} />
        </div>
      </div>
    </article>
  );
}
