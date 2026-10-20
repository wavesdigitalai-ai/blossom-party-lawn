'use client';

import { useEffect, useRef } from 'react';

export default function Pre() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const pre = ref.current;
    if (!pre) return;
    let t1 = 0;
    let t2 = 0;
    const done = () => {
      pre.classList.add('done');
      document.body.classList.add('loaded');
    };
    const onLoad = () => {
      t2 = window.setTimeout(done, 250);
    };
    if (document.readyState === 'complete') {
      t1 = window.setTimeout(done, 300);
    } else {
      window.addEventListener('load', onLoad);
      t1 = window.setTimeout(done, 2800);
    }
    const cap = window.setTimeout(done, 3500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(cap);
      window.removeEventListener('load', onLoad);
    };
  }, []);
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div>
        <svg className="loader-flower" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="8" strokeWidth="1.4" />
          <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.4" />
          <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.4" transform="rotate(72 48 48)" />
          <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.4" transform="rotate(144 48 48)" />
          <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.4" transform="rotate(216 48 48)" />
          <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.4" transform="rotate(288 48 48)" />
        </svg>
        <div className="loader-word">Blossom Party Lawn</div>
      </div>
    </div>
  );
}
