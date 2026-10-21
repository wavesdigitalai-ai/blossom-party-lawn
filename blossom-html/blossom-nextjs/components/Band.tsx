'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function Band({ img, speed = 0.25, children }: { img: string; speed?: number; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const b = ref.current;
    if (!b) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = b.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const shift = ((window.innerHeight - r.top) * speed * 0.4).toFixed(1);
        b.style.backgroundPosition = 'center calc(50% +' + shift + 'px)';
        b.style.backgroundAttachment = 'fixed';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <section className="band" ref={ref} data-parallax={speed} style={{ backgroundImage: 'url(' + img + ')' }}>
      {children}
    </section>
  );
}
