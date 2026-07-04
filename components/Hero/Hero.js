import Link from 'next/link';
import { getMessages, getDataForLocale } from '@/lib/utils';
import styles from './Hero.module.css';

export default function Hero({ locale }) {
  const t = getMessages(locale);
  const data = getDataForLocale(locale);
  const featured = data.models.find((m) => m.name === 'DELTA Pro 3') || data.models[0];
  const isEs = locale === 'es';

  const stats = [
    { value: '14', label: isEs ? 'modelos EcoFlow' : 'EcoFlow models' },
    { value: '90 kWh', label: isEs ? 'sistema escalable' : 'scalable system' },
    { value: '5', label: isEs ? 'años de garantía' : 'year warranty' },
    { value: '4–5', label: isEs ? 'días de entrega' : 'day delivery' }
  ];

  return (
    <header className={styles.hero} id="inicio">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className="kicker">{t.heroKicker}</div>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: t.heroTitle }}
          />
          <p className={styles.desc}>{t.heroDesc}</p>
          <div className={styles.actions}>
            <Link className="btn primary" href="#categorias">
              {t.chooseCategory}
            </Link>
            <Link className="btn" href="#recomendador">
              {t.quickRecommendation}
            </Link>
          </div>
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.visual}>
          <div className={`${styles.orbit} ${styles.orbitOne}`}></div>
          <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>
          <div className={styles.product}>
            <img src={featured.image} alt={featured.name} />
          </div>
          <span className={styles.productBadge}>{featured.name}</span>
        </div>
      </div>
    </header>
  );
}
