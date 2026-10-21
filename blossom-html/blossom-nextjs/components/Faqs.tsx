'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Faq = { q: string; a: string };

function Ans({ open, inner }: { open: boolean; inner: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    if (open && ref.current) setH(ref.current.scrollHeight);
  }, [open]);
  useEffect(() => {
    const onR = () => {
      if (open && ref.current) setH(ref.current.scrollHeight);
    };
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, [open]);
  return (
    <div className="faq-a" ref={ref} style={{ maxHeight: open && h ? h + 'px' : '0px' }}>
      <div className="inner">{inner}</div>
    </div>
  );
}

export default function Faqs({ head, items }: { head?: ReactNode; items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-wrap">
      {head}
      {items.map((it, ix) => (
        <div className="faq-item" key={ix}>
          <button className={'faq-q' + (open === ix ? ' open' : '')} aria-expanded={open === ix} onClick={() => setOpen(open === ix ? null : ix)}>
            {it.q}
            <span className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </button>
          <Ans open={open === ix} inner={it.a} />
        </div>
      ))}
    </div>
  );
}
