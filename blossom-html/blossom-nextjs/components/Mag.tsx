'use client';

import { useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';

type MagProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export default function Mag({ children, onPointerMove, onPointerLeave, ...rest }: MagProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(e);
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.14;
    const dy = (e.clientY - r.top - r.height / 2) * 0.2;
    el.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + (dy - 3).toFixed(1) + 'px)';
  };
  const leave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(e);
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <a ref={ref} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </a>
  );
}
