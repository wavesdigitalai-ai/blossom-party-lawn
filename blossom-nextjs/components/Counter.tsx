'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ n, suffix, label, dec = 0 }: { n: number; suffix: string; label: string; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [txt, setTxt] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting || started.current) return;
          started.current = true;
          io.unobserve(el);
          const dur = 1900;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setTxt((n * eased).toFixed(dec));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n, dec]);

  return (
    <div className="counter">
      <b><span ref={ref}>{txt}</span><i>{suffix}</i></b>
      <span>{label}</span>
    </div>
  );
}
