import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './SubpageHero.module.css';

const VISUALS = {
  bundlesReal: (
    <div className={styles.bundleReal} aria-hidden="true">
      <Image
        className={styles.bundleRealStation}
        src="/products/img-25.png"
        alt=""
        width={420}
        height={320}
      />
      <span className={styles.bundleRealPlus}>+</span>
      <Image
        className={styles.bundleRealPanel}
        src="/products/img-02.png"
        alt=""
        width={300}
        height={220}
      />
    </div>
  ),
  panels: (
    <div className={clsx(styles.panelFolding, styles.large)} aria-hidden="true">
      <span></span>
      <span></span>
    </div>
  ),
  batteries: (
    <div className={styles.batteryStack} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  ),
  bundles: (
    <div className={styles.packageHero} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  ),
  smart: (
    <div className={styles.smartDevice} aria-hidden="true">
      <span></span>
      <span></span>
    </div>
  )
};

export default function SubpageHero({
  locale,
  copy,
  visual,
  secondaryHref,
  primaryHref = '#products',
  featureVariant
}) {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={clsx('container', styles.grid)}>
        <div>
          <div className="kicker">{copy.kicker}</div>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.desc}>{copy.desc}</p>
          <div className={styles.actions}>
            <Link className="btn primary" href={primaryHref}>
              {copy.primaryCta}
            </Link>
            <Link className="btn" href={secondaryHref}>
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            styles.feature,
            featureVariant && styles[featureVariant]
          )}
        >
          {VISUALS[visual]}
          <div className={styles.meta}>
            <strong>{copy.metaTitle}</strong>
            <small>{copy.metaSub}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
