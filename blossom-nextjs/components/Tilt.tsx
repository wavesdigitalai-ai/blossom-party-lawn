'use client';

import { useRef, type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';

type TiltProps = { strength?: number; children: ReactNode } & HTMLAttributes<HTMLDivElement>;

export function Tilt({ strength = 6, children, className, ...rest }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = 'perspective(900px) rotateX(' + (-py * strength).toFixed(2) + 'deg) rotateY(' + (px * strength).toFixed(2) + 'deg) translateY(-8px)';
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div ref={ref} className={className} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </div>
  );
}

type TiltAProps = { strength?: number; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;

export function TiltA({ strength = 6, children, className, ...rest }: TiltAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = 'perspective(900px) rotateX(' + (-py * strength).toFixed(2) + 'deg) rotateY(' + (px * strength).toFixed(2) + 'deg) translateY(-8px)';
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <a ref={ref} className={className} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </a>
  );
}
