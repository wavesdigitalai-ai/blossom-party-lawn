'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import Mag from './Mag';
import { dl } from './util';

const SLIDES = ['/images/venue-4.png', '/images/venue-2.png', '/images/venue-6.png'];

const ARROW: CSSProperties = {
  background: 'none',
  border: '1px solid rgba(250,246,238,.3)',
  width: 46,
  height: 46,
  borderRadius: '50%',
  color: 'var(--cream)',
  display: 'grid',
  placeItems: 'center',
};

const wd = (i: number): CSSProperties => ({ transitionDelay: 0.06 * i + 's' });

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6000);
    return () => window.clearInterval(t);
  }, [idx]);

  const go = useCallback((n: number) => setIdx((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(idx + 1);
      if (e.key === 'ArrowLeft') go(idx - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go, idx]);

  return (
    <section className={'hero' + (loaded ? ' loaded' : '')} id="hero">
      <div className="hero-screen">
        {SLIDES.map((s, i) => (
          <div key={s} className={'hero-slide' + (i === idx ? ' active' : '')} style={{ backgroundImage: 'url(' + s + ')' }} />
        ))}
      </div>
      <div className="hero-veil" />

      <div className="scrolldown"><span>Scroll</span><i></i></div>

      <div className="container hero-content">
        <p className="hero-eyebrow reveal" style={dl('0.65s')}>Ognaj · Ahmedabad · Gujarat</p>
        <h1 className="hero-title">
          <span className="word"><span style={wd(0)}>Where</span></span>{' '}
          <span className="word"><span style={wd(1)}>Every</span></span>{' '}
          <span className="word it"><span style={wd(2)}>Celebration</span></span><br />
          <span className="word"><span style={wd(3)}>Blooms</span></span>
        </h1>
        <p className="hero-sub reveal" style={dl('0.9s')}>Ahmedabad&apos;s lush open-air party lawn for weddings, receptions, garba &amp; sangeet nights, birthdays and corporate gatherings — 250 to 600 guests, golden-green ambience, every amenity in place.</p>
        <div className="hero-actions reveal" style={dl('1.1s')}>
          <Mag className="btn btn-gold" href="/contact">Reserve Your Date <span className="arr">→</span></Mag>
          <Link className="btn btn-ghost" href="/about">Explore the Venue</Link>
        </div>
      </div>

      <div className="container hero-foot">
        <div className="hero-stats">
          <div className="hstat"><b>600</b><span>Guest Capacity</span></div>
          <div className="hstat"><b>4.6★</b><span>Guest Rating</span></div>
          <div className="hstat"><b>10–10</b><span>Event Window</span></div>
          <div className="hstat"><b>100%</b><span>Open-Air Greens</span></div>
        </div>
        <div className="slide-nav">
          <button className="hero-arrow-prev" style={ARROW} onClick={() => go(idx - 1)} aria-label="Previous slide">←</button>
          <div className="dots">
            {SLIDES.map((s, i) => (
              <button key={s} className={'dot' + (i === idx ? ' active' : '')} onClick={() => go(i)} aria-label={'Slide ' + (i + 1)} />
            ))}
          </div>
          <button className="hero-arrow-next" style={ARROW} onClick={() => go(idx + 1)} aria-label="Next slide">→</button>
          <span className="slide-count"><b>{'0' + (idx + 1)}</b> / 03</span>
        </div>
      </div>
    </section>
  );
}
