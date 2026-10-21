'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Mag from './Mag';

const LINKS: [string, string, string][] = [
  ['/', 'Home', '01'],
  ['/about', 'The Venue', '02'],
  ['/occasions', 'Occasions', '03'],
  ['/gallery', 'Gallery', '04'],
  ['/packages', 'Packages', '05'],
  ['/contact', 'Contact', '06'],
];

export default function Nav() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prog = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => { document.body.classList.remove('no-scroll'); };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const el = prog.current;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (el && h > 0) el.style.width = ((window.scrollY / h) * 100).toFixed(2) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));
  const isContact = path === '/contact';

  return (
    <>
      <div className="progress" id="prog" ref={prog} aria-hidden="true" />
      <header className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/" aria-label="Blossom Party Lawn — home">
            <svg className="brand-mark" viewBox="0 0 96 96" fill="none" aria-hidden="true">
              <circle cx="48" cy="48" r="43" strokeWidth="1.6" />
              <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" />
              <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(72 48 48)" />
              <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(144 48 48)" />
              <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(216 48 48)" />
              <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(288 48 48)" />
              <circle cx="48" cy="48" r="6.5" strokeWidth="1.6" />
            </svg>
            <span className="brand-text">
              <span className="brand-name">Blossom</span>
              <span className="brand-sub">Party Lawn</span>
            </span>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={active(href) ? 'active' : ''}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <Mag className="btn btn-gold btn-sm" href={isContact ? 'tel:+918470820640' : '/contact'}>
              {isContact ? 'Call Now' : 'Reserve Your Date'} <span className="arr">→</span>
            </Mag>
          </div>
          <button className={'burger' + (open ? ' open' : '')} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={'mob-menu' + (open ? ' open' : '')} id="mobMenu">
        {LINKS.map(([href, label, no]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<sup>{no}</sup></Link>
        ))}
        <div className="mm-meta">New Science City Road, Ognaj, Ahmedabad &nbsp;·&nbsp; +91 84608 20640</div>
      </div>
    </>
  );
}
