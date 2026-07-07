import Image from 'next/image';
import AddToCartButton from '@/components/Cart/AddToCartButton';
import { formatMXN } from '@/lib/utils';
import styles from './PackageCard.module.css';

export default function PackageCard({ product, locale }) {
  const isEs = locale === 'es';
  const pick = (f) => (f && typeof f === 'object' && !Array.isArray(f) ? f[locale] || f.es : f);
  const L = {
    charge: isEs ? 'Carga con panel' : 'Charge with panel',
    capacity: isEs ? 'Capacidad' : 'Capacity',
    output: isEs ? 'Salida' : 'Output',
    runtime: isEs ? 'Autonomía estimada' : 'Estimated runtime'
  };

  return (
    <article className={styles.card}>
      <div className={styles.photoStack}>
        <div className={styles.photoSlot}>
          <Image
            src={product.stationImage}
            alt={product.station}
            width={340}
            height={340}
            className={styles.photo}
          />
        </div>
        <span className={styles.plus} aria-hidden="true">+</span>
        <div className={styles.photoSlot}>
          <Image
            src={product.panelImage}
            alt={product.panel}
            width={340}
            height={340}
            className={styles.photo}
          />
        </div>
      </div>

      <div className={styles.body}>
        <span className={styles.badge}>{pick(product.family)}</span>
        <div className={styles.titleRow}>
          <h3>{pick(product.title)}</h3>
          <span className={styles.price}>
            <strong>{formatMXN(product.priceCents)}</strong>
            <em>{pick(product.saleStatus)}</em>
          </span>
        </div>

        <p className={styles.intro}>{pick(product.intro)}</p>

        <div className={styles.specs}>
          <span><strong>{L.charge}:</strong> {product.specs.carga}</span>
          <span><strong>{L.capacity}:</strong> {product.specs.cap}</span>
          <span><strong>{L.output}:</strong> {product.specs.out}</span>
        </div>

        <p className={styles.usage}>{pick(product.usage)}</p>

        <div className={styles.runtime}>
          <span className={styles.runtimeLabel}>{L.runtime}</span>
          <ul>
            {product.runtime.map((r, i) => (
              <li key={i}>
                <span>{pick(r.label)}</span>
                <strong>{r.time}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <AddToCartButton slug={product.slug} locale={locale} />
        </div>
      </div>
    </article>
  );
}
