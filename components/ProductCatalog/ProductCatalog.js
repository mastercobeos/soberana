import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductCatalog.module.css';

export default function ProductCatalog({
  locale,
  products,
  sectionId,
  kicker,
  title,
  desc,
  verMasLabel
}) {
  return (
    <section className="section" id={sectionId}>
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">{kicker}</div>
            <h2>{title}</h2>
          </div>
          <p className="sectionDesc">{desc}</p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              locale={locale}
              verMasLabel={verMasLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
