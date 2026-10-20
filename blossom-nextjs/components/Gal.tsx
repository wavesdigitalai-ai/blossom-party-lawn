'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';

export type GalItem = { src: string; cat: string; cap: string; alt: string; cls?: string };

const ZOOM = (
  <span className="gal-zoom">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6m-3-3h6" />
    </svg>
  </span>
);

export default function Gal({ items, filters, head, gridClass = 'gal-grid stagger reveal' }: {
  items: GalItem[];
  filters?: [string, string][];
  head?: ReactNode;
  gridClass?: string;
}) {
  const [f, setF] = useState('all');
  const [lb, setLb] = useState<number | null>(null);

  const shown = useMemo(() => items.filter((it) => f === 'all' || it.cat.includes(f)), [items, f]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', lb !== null);
    return () => { document.body.classList.remove('no-scroll'); };
  }, [lb]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lb === null) return;
      if (e.key === 'Escape') setLb(null);
      if (e.key === 'ArrowRight') setLb((c) => (c === null ? c : (c + 1) % shown.length));
      if (e.key === 'ArrowLeft') setLb((c) => (c === null ? c : (c - 1 + shown.length) % shown.length));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lb, shown.length]);

  return (
    <>
      {head}
      {filters && (
        <div className="gallery-filters stagger reveal">
          {filters.map(([k, label]) => (
            <button key={k} className={'filter-btn' + (f === k ? ' active' : '')} data-filter={k} onClick={() => { setF(k); setLb(null); }}>{label}</button>
          ))}
        </div>
      )}
      <div className={gridClass}>
        {shown.map((it, ix) => (
          <div key={it.src + it.cap} className={'gal-item' + (it.cls ? ' ' + it.cls : '')} data-full={it.src} data-cat={it.cat} data-cap={it.cap} onClick={() => setLb(ix)}>
            <img src={it.src} alt={it.alt} loading="lazy" />
            {ZOOM}
            <span className="cap">{it.cap}</span>
          </div>
        ))}
      </div>
      <div className={'lightbox' + (lb !== null ? ' open' : '')} role="dialog" aria-modal="true" aria-label="Image viewer" onClick={(e) => { if (e.target === e.currentTarget) setLb(null); }}>
        <div className="lb-frame">
          {lb !== null && shown[lb] && <img src={shown[lb].src} alt={shown[lb].cap} />}
          <div className="lb-cap">{lb !== null && shown[lb] ? shown[lb].cap : ''}</div>
        </div>
        <button className="lb-close" aria-label="Close" onClick={() => setLb(null)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
        <button className="lb-prev" aria-label="Previous" onClick={() => lb !== null && setLb((lb - 1 + shown.length) % shown.length)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button className="lb-next" aria-label="Next" onClick={() => lb !== null && setLb((lb + 1) % shown.length)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </>
  );
}
