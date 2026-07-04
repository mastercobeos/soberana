'use client';

import styles from './Recommendations.module.css';

function goToModel(name) {
  window.dispatchEvent(new CustomEvent('soberana:go-to-model', { detail: name }));
}

function ModelLink({ name, label }) {
  return (
    <a
      className={styles.link}
      href={`#modelo-${name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={(event) => {
        event.preventDefault();
        goToModel(name);
      }}
    >
      {label || name}
    </a>
  );
}

function renderModelCell({ label, models, messages }) {
  if (label.includes('DELTA Pro 3') && label.includes('Ultra')) {
    return (
      <>
        <ModelLink name="DELTA Pro 3" />
        <span className={styles.connector}>{messages.or}</span>
        <ModelLink name="DELTA Pro Ultra" />
        <span className={styles.suffix}>{messages.withTransfer}</span>
      </>
    );
  }
  const exact = models.find((m) => m.name === label);
  return exact ? <ModelLink name={exact.name} label={label} /> : <span className={styles.pill}>{label}</span>;
}

export default function Recommendations({ data, messages }) {
  return (
    <section className="section" id="recomendador">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">{messages.recommendationKicker}</div>
            <h2>{messages.recommendationTitle}</h2>
          </div>
          <p className="sectionDesc">{messages.recommendationDesc}</p>
        </div>
        <div className={styles.panel}>
          <div className={styles.tableScroll}>
            <table>
              <thead>
                <tr>
                  <th>{messages.needHeader}</th>
                  <th>{messages.modelHeader}</th>
                  <th>{messages.categoryHeader}</th>
                </tr>
              </thead>
              <tbody>
                {data.recommendations.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>
                      <span className={styles.pill}>
                        {renderModelCell({ label: row[1], models: data.models, messages })}
                      </span>
                    </td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
