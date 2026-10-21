'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [ok, setOk] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <Link className="brand" href="/" aria-label="Blossom Party Lawn — home">
              <svg className="brand-mark" viewBox="0 0 96 96" fill="none" aria-hidden="true">
                <circle cx="48" cy="48" r="43" strokeWidth="1.6" style={{ stroke: 'var(--gold)' }} />
                <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" style={{ stroke: 'var(--gold)' }} />
                <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(72 48 48)" style={{ stroke: 'var(--gold)' }} />
                <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(144 48 48)" style={{ stroke: 'var(--gold)' }} />
                <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(216 48 48)" style={{ stroke: 'var(--gold)' }} />
                <ellipse cx="48" cy="30" rx="10" ry="17" strokeWidth="1.6" transform="rotate(288 48 48)" style={{ stroke: 'var(--gold)' }} />
                <circle cx="48" cy="48" r="6.5" strokeWidth="1.6" style={{ stroke: 'var(--rose)' }} />
              </svg>
              <span className="brand-text"><span className="brand-name" style={{ color: 'var(--cream)' }}>Blossom</span><span className="brand-sub">Party Lawn</span></span>
            </Link>
            <p>A lush open-air party lawn in Ognaj, Ahmedabad — where weddings, receptions, garba nights and corporate gatherings bloom into lifelong memories.</p>
            <div className="f-social">
              <a href="https://www.instagram.com/explore/tags/blossompartylawn/" aria-label="Instagram" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://www.facebook.com/search/top?q=blossom%20party%20lawn" aria-label="Facebook" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h2.5V5H14a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.4l.6-3H13V9a1 1 0 0 1 1-1z" /></svg>
              </a>
              <a href="https://www.youtube.com/results?search_query=blossom+party+lawn+ahmedabad" aria-label="YouTube" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.4-.4-5a2.8 2.8 0 0 0-2-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.6 2 12 2 12s0 3.4.4 5a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z" /></svg>
              </a>
              <a href="https://wa.me/918470820640" aria-label="WhatsApp" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.2-.3 0-.4.1-.6l.5-.6a.6.6 0 0 0 .1-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2A5.1 5.1 0 0 0 8.1 13a11 11 0 0 0 4.2 3.7 8.9 8.9 0 0 0 2.9.9 2.9 2.9 0 0 0 2-.7 2.6 2.6 0 0 0 .9-1.9c0-.2-.2-.4-.5-.5z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="f-h">Explore</h5>
            <ul className="f-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">The Venue</Link></li>
              <li><Link href="/occasions">Occasions</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/packages">Packages &amp; Pricing</Link></li>
              <li><Link href="/contact">Contact &amp; Booking</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="f-h">Celebrations</h5>
            <ul className="f-links">
              <li><Link href="/occasions#weddings">Weddings &amp; Baraat</Link></li>
              <li><Link href="/occasions#receptions">Receptions</Link></li>
              <li><Link href="/occasions#garba">Garba &amp; Sangeet</Link></li>
              <li><Link href="/occasions#prewedding">Haldi &amp; Mehndi</Link></li>
              <li><Link href="/occasions#birthdays">Birthdays &amp; Showers</Link></li>
              <li><Link href="/occasions#corporate">Corporate Events</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="f-h">Visit &amp; Book</h5>
            <ul className="f-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.3" /></svg>
                New Science City Road, Vasantnagar Township, Ognaj, Ahmedabad, Gujarat 380060
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 4h4l1.7 4.2-2.2 1.7a12 12 0 0 0 5.6 5.6l1.7-2.2L20 15v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4z" /></svg>
                <a href="tel:+918470820640">+91 84608 20640</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>
                Events daily, 10:00 AM – 10:00 PM
              </li>
            </ul>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); setOk(true); }} aria-label="Newsletter">
              <input type="email" placeholder="Your email for date alerts" aria-label="Email address" required />
              <button type="submit" onClick={() => setOk(true)} aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
              </button>
            </form>
            <div className={'newsletter-ok' + (ok ? ' show' : '')}>Petal-fresh dates, coming your way ✿</div>
          </div>
        </div>
        <div className="footer-foot">
          <span suppressHydrationWarning={true}>© {new Date().getFullYear()} Blossom Party Lawn, Ognaj · Ahmedabad, Gujarat. All rights reserved.</span>
          <span className="made">Crafted with <b>✿</b> for celebrations</span>
        </div>
      </div>
    </footer>
  );
}
