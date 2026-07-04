import styles from './LegalDocument.module.css';

export default function LegalDocument({ kicker, title, intro, updatedLabel, note, sections }) {
  return (
    <>
      <section className={`section ${styles.legalHero}`}>
        <div className="container">
          <div className="kicker">{kicker}</div>
          <h1 className={styles.title}>{title}</h1>
          {intro && <p className={styles.desc}>{intro}</p>}
          {updatedLabel && <p className={styles.updated}>{updatedLabel}</p>}
        </div>
      </section>
      <section className={`section ${styles.legalSection}`}>
        <div className={`container ${styles.doc}`}>
          {note && <div className={styles.note}>{note}</div>}
          {sections.map((section, i) => (
            <div key={i}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
