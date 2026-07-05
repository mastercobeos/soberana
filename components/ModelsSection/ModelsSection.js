'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { modelAnchorId } from '@/lib/utils';
import styles from './ModelsSection.module.css';

function ModelCard({ model, messages, isCompared, onDetails, onCompare, highlight }) {
  const compareId = `compare-${modelAnchorId(model.name)}`;
  return (
    <article
      className={clsx(styles.card, highlight && styles.cardHighlight)}
      id={modelAnchorId(model.name)}
      data-model-name={model.name}
    >
      <img
        className={styles.warrantyRibbon}
        src="/assets/warranty-5-year.png"
        alt={messages.warranty}
        loading="lazy"
      />
      <div className={styles.image}>
        <span className={styles.levelBadge}>
          {messages.level} {model.level}
        </span>
        {model.display_price && (
          <span className={styles.priceTag}>
            <strong>{model.display_price}</strong>
            {model.sale_status && <em>{model.sale_status}</em>}
          </span>
        )}
        <img src={model.image} alt={model.name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.familyBadge}>{model.family}</span>
          <h3>{model.name}</h3>
          <p className={styles.message}>{model.message}</p>
        </div>

        <div className={styles.specGrid}>
          <div className={styles.spec}>
            <small>{messages.batteryCapacity}</small>
            <strong>{model.capacity}</strong>
          </div>
          <div className={styles.spec}>
            <small>{messages.outputPower}</small>
            <strong>{model.power}</strong>
          </div>
          <div className={clsx(styles.spec, styles.full)}>
            <small>{messages.batteryExpansion}</small>
            <strong>{model.expansion}</strong>
          </div>
        </div>

        <div className={styles.tags}>
          <span className={styles.tagsLabel}>{messages.recommendedFor}</span>
          <div className={styles.tagsList}>
            {model.ideal.slice(0, 4).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.detailsBtn}
            type="button"
            onClick={() => onDetails(model)}
          >
            {messages.details}
          </button>
          <label
            htmlFor={compareId}
            className={clsx(styles.compareToggle, isCompared && styles.compareOn)}
          >
            <input
              id={compareId}
              type="checkbox"
              checked={isCompared}
              onChange={() => onCompare(model)}
            />
            <span aria-hidden="true" className={styles.compareBox}>
              {isCompared ? '✓' : '+'}
            </span>
            <span className={styles.compareLabel}>
              {isCompared ? messages.selected : messages.compare}
            </span>
          </label>
        </div>
      </div>
    </article>
  );
}

function Modal({ model, messages, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!model) return null;

  return (
    <div
      className={clsx(styles.modal, styles.modalOpen)}
      aria-hidden="false"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalCard}>
        <div className={styles.modalGrid}>
          <div className={styles.modalMedia}>
            <img src={model.image} alt={model.name} />
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalTop}>
              <div>
                <div className="kicker">{model.family}</div>
                <h2 className={styles.modalTitle}>{model.name}</h2>
                <p className={styles.modalSubtitle}>{model.message}</p>
                <span className={styles.warrantyBadge}>{messages.warranty}</span>
              </div>
              <button
                className={styles.close}
                type="button"
                aria-label={messages.close}
                onClick={onClose}
              >
                ×
              </button>
            </div>
            <div className={styles.summary}>{model.explanation}</div>
            <p className={styles.plain}>
              <strong>{messages.plainWords}</strong> {model.plain}
            </p>
            <div className={styles.specs}>
              {model.display_price && (
                <div className={styles.modalSpec}>
                  <small>{messages.capacity === 'Capacity' ? 'Price' : 'Precio'}</small>
                  <strong>{model.display_price}</strong>
                </div>
              )}
              <div className={styles.modalSpec}>
                <small>{messages.capacity}</small>
                <strong>{model.capacity}</strong>
              </div>
              <div className={styles.modalSpec}>
                <small>{messages.power}</small>
                <strong>{model.power}</strong>
              </div>
              <div className={styles.modalSpec}>
                <small>{messages.batteryExpansion}</small>
                <strong>{model.expansion_short}</strong>
              </div>
            </div>
            <div className={styles.columns}>
              <div className={clsx(styles.miniList, styles.good)}>
                <h4>{messages.recommendedFor}</h4>
                <ul>
                  {model.ideal.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className={clsx(styles.miniList, styles.bad)}>
                <h4>{messages.notBestFor}</h4>
                <ul>
                  {model.avoid.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className={styles.officialLink}
              href={model.url}
              target="_blank"
              rel="noopener"
            >
              {messages.officialLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryDropdown({ categories, active, onChange, category, filterAria }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const activeItem = categories.find((c) => c.id === active) || categories[0];

  useEffect(() => {
    const onDoc = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className={styles.filters}>
      <div
        ref={wrapRef}
        className={clsx(styles.selectWrap, open && styles.selectOpen)}
      >
        <span className={styles.selectLabel}>{category}</span>
        <button
          className={styles.selectButton}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={filterAria}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{activeItem?.title}</span>
        </button>
        <span className={styles.selectArrow} aria-hidden="true">▾</span>
        <div className={styles.selectMenu} role="listbox" aria-label={category}>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={clsx(c.id === active && styles.active)}
              role="option"
              aria-selected={c.id === active}
              onClick={() => {
                onChange(c.id);
                setOpen(false);
              }}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompareTray({ selected, models, messages, onOpen, onRemove, onClear }) {
  const chosen = selected.map((n) => models.find((m) => m.name === n)).filter(Boolean);
  if (!chosen.length) return null;

  return (
    <div className={styles.tray} role="region" aria-label={messages.compareTitle}>
      <div className={styles.trayInner}>
        <div className={styles.trayMeta}>
          <span className={styles.trayCount}>{chosen.length}/3</span>
          <span className={styles.trayLabel}>{messages.compareTitle}</span>
        </div>
        <ul className={styles.trayList}>
          {chosen.map((model) => (
            <li key={model.name} className={styles.trayItem}>
              <img src={model.image} alt={model.name} />
              <div>
                <strong>{model.name}</strong>
                <span>{model.family}</span>
              </div>
              <button
                type="button"
                className={styles.trayRemove}
                aria-label={`${messages.clear} · ${model.name}`}
                onClick={() => onRemove(model.name)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.trayActions}>
          <button className={styles.trayClear} type="button" onClick={onClear}>
            {messages.clear}
          </button>
          <button className={styles.trayCta} type="button" onClick={onOpen}>
            {messages.compareTitle} ({chosen.length})
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ModelsSection({ data, messages }) {
  const firstCategory = data.categories[0]?.id;
  const [activeFilter, setActiveFilter] = useState(firstCategory);
  const [selectedCompare, setSelectedCompare] = useState([]);
  const [modalModel, setModalModel] = useState(null);
  const [highlightName, setHighlightName] = useState(null);

  useEffect(() => {
    const onFilter = (event) => {
      const nextId = event.detail;
      if (data.categories.some((c) => c.id === nextId)) {
        setActiveFilter(nextId);
      }
    };
    window.addEventListener('soberana:filter-category', onFilter);
    return () => window.removeEventListener('soberana:filter-category', onFilter);
  }, [data.categories]);

  useEffect(() => {
    const onGo = (event) => {
      const name = event.detail;
      const model = data.models.find((m) => m.name === name);
      if (!model) return;
      setActiveFilter(model.category);
      requestAnimationFrame(() => {
        const target = document.getElementById(modelAnchorId(name));
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setHighlightName(name);
        setTimeout(() => setHighlightName(null), 2400);
      });
    };
    window.addEventListener('soberana:go-to-model', onGo);
    return () => window.removeEventListener('soberana:go-to-model', onGo);
  }, [data.models]);

  const filtered = useMemo(() => {
    return data.models.filter(
      (m) => activeFilter === 'all' || m.category === activeFilter
    );
  }, [activeFilter, data.models]);

  const toggleCompare = (model) => {
    setSelectedCompare((prev) => {
      if (prev.includes(model.name)) return prev.filter((n) => n !== model.name);
      if (prev.length >= 3) {
        alert(messages.maxCompare);
        return prev;
      }
      return [...prev, model.name];
    });
  };

  const removeCompare = (name) =>
    setSelectedCompare((prev) => prev.filter((n) => n !== name));

  const goToComparator = () => {
    document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const compareRows = useMemo(() => {
    if (!selectedCompare.length) return null;
    const chosen = selectedCompare.map((n) => data.models.find((m) => m.name === n));
    return [
      [messages.model, ...chosen.map((m) => m.name)],
      [messages.category, ...chosen.map((m) => data.categories.find((c) => c.id === m.category)?.title)],
      [messages.batteryCapacity, ...chosen.map((m) => m.capacity)],
      [messages.outputPower, ...chosen.map((m) => m.power)],
      [messages.batteryExpansion, ...chosen.map((m) => m.expansion)],
      [messages.plainWords, ...chosen.map((m) => m.plain)],
      [messages.recommended, ...chosen.map((m) => m.ideal.join(', '))]
    ];
  }, [selectedCompare, data.models, data.categories, messages]);

  return (
    <>
      <section className="section" id="modelos">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="kicker">{messages.modelsKicker}</div>
              <h2>{messages.modelsTitle}</h2>
            </div>
            <p className="sectionDesc">{messages.modelsDesc}</p>
          </div>

          <div className={styles.explainer}>
            <div className={styles.explainCard}>
              <strong>{messages.capacityTitle}</strong>
              <span>{messages.capacityDesc}</span>
            </div>
            <div className={styles.explainCard}>
              <strong>{messages.powerTitle}</strong>
              <span>{messages.powerDesc}</span>
            </div>
            <div className={styles.explainCard}>
              <strong>{messages.expansionTitle}</strong>
              <span>{messages.expansionDesc}</span>
            </div>
          </div>

          <div className={styles.toolbar}>
            <CategoryDropdown
              categories={data.categories}
              active={activeFilter}
              onChange={setActiveFilter}
              category={messages.category}
              filterAria={messages.filterAria}
            />
            <span className={styles.resultsCount}>
              {filtered.length} {filtered.length === 1 ? messages.model : messages.model + 's'}
            </span>
          </div>

          <div className={styles.grid}>
            {filtered.length === 0 && <div className={styles.empty}>{messages.noModels}</div>}
            {filtered.map((model) => (
              <ModelCard
                key={model.name}
                model={model}
                messages={messages}
                isCompared={selectedCompare.includes(model.name)}
                onDetails={setModalModel}
                onCompare={toggleCompare}
                highlight={highlightName === model.name}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedCompare.length > 0 && (
        <section className="section" id="comparador">
          <div className="container">
            <div className={clsx(styles.panel, styles.panelVisible)}>
              <div className={styles.panelHead}>
                <div>
                  <h3>{messages.compareTitle}</h3>
                  <small>{messages.compareSubtitle}</small>
                </div>
                <button
                  className={styles.clearBtn}
                  type="button"
                  onClick={() => setSelectedCompare([])}
                >
                  {messages.clear}
                </button>
              </div>
              <div className={styles.tableScroll}>
                <table>
                  <tbody>
                    {compareRows?.map((row, i) => (
                      <tr key={i}>
                        <th>{row[0]}</th>
                        {row.slice(1).map((v, j) => (
                          <td key={j}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      <CompareTray
        selected={selectedCompare}
        models={data.models}
        messages={messages}
        onOpen={goToComparator}
        onRemove={removeCompare}
        onClear={() => setSelectedCompare([])}
      />

      <Modal model={modalModel} messages={messages} onClose={() => setModalModel(null)} />
    </>
  );
}
