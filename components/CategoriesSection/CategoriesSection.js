'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './CategoriesSection.module.css';

function CategorySlider({ category, models, viewLabel }) {
  const categoryModels = models.filter((m) => m.category === category.id);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Auto-advance solo cuando el usuario está hovereando (desktop) o
  // en dispositivos táctiles (donde no hay hover disponible).
  useEffect(() => {
    if (categoryModels.length < 2) return;
    const supportsHover =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover)').matches;
    const shouldAdvance = !supportsHover || hovering;
    if (!shouldAdvance) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % categoryModels.length);
    }, supportsHover ? 1400 : 3000);
    return () => clearInterval(timer);
  }, [categoryModels.length, hovering]);

  const goToModels = (event) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.hash = 'modelos';
    window.history.replaceState(null, '', url);
    window.dispatchEvent(
      new CustomEvent('soberana:filter-category', { detail: category.id })
    );
    document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`${viewLabel}: ${category.title}`}
      onClick={goToModels}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToModels(e);
        }
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      <div className={styles.media}>
        <div className={styles.mediaGlow}></div>
        {categoryModels.map((m, i) => (
          <img
            key={m.name}
            className={clsx(styles.slide, i === index && styles.slideActive)}
            src={m.image}
            alt={m.name}
            loading="lazy"
          />
        ))}
        <span className={styles.modelName}>{categoryModels[index]?.name}</span>
        <div className={styles.dots} aria-hidden="true">
          {categoryModels.map((_, i) => (
            <span
              key={i}
              className={clsx(styles.dot, i === index && styles.dotActive)}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.number}>{category.number}</div>
          <h3>{category.title}</h3>
        </div>
        <p>{category.description}</p>
        <span className={styles.family}>{category.family}</span>
        <span className={styles.link}>{viewLabel}</span>
      </div>
    </article>
  );
}

export default function CategoriesSection({ locale, data, messages }) {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">{messages.categoriesKicker}</div>
            <h2>{messages.categoriesTitle}</h2>
          </div>
          <p className="sectionDesc">{messages.categoriesDesc}</p>
        </div>
        <div className={styles.grid}>
          {data.categories.map((category) => (
            <CategorySlider
              key={category.id}
              category={category}
              models={data.models}
              viewLabel={messages.viewModels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
