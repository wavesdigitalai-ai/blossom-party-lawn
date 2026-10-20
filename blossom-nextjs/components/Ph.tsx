import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Ph({ img, crumb, title, sub }: { img: string; crumb: string; title: ReactNode; sub: string }) {
  return (
    <section className="page-hero" style={{ backgroundColor: 'var(--forest-3)' }}>
      <div className="ph-img" style={{ backgroundImage: 'url(' + img + ')' }} />
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">✿</span>
          <span>{crumb}</span>
        </nav>
        {title}
        <p className="sub">{sub}</p>
      </div>
    </section>
  );
}
