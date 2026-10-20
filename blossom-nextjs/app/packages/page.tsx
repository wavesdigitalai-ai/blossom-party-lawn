import type { Metadata } from 'next';
import Link from 'next/link';
import Ph from '@/components/Ph';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Band from '@/components/Band';
import Faqs from '@/components/Faqs';
import Mag from '@/components/Mag';
import { Tilt } from '@/components/Tilt';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'Packages & Pricing — Blossom Party Lawn, Ognaj Ahmedabad | Full-Day Booking ₹7,00,000' },
  description: 'Transparent packages at Blossom Party Lawn, Ognaj Ahmedabad — full-day venue booking from ₹4.5 L, signature ₹7.0 L and bespoke formats. Per-plate catering quoted in writing; outside caterers welcome.',
  keywords: ['Blossom Party Lawn price', 'party lawn booking price Ahmedabad', 'wedding venue cost Ognaj', 'banquet hall rent Gota 380060'],
  alternates: { canonical: '/packages' },
  openGraph: { title: 'Packages & Pricing — Blossom Party Lawn, Ahmedabad', description: 'Full-day venue booking from ₹7,00,000; menus and décor quoted to taste — written down, never guessed.', images: ['/images/venue-6.png'] },
};

const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blossompartylawn.in/' },
    { '@type': 'ListItem', position: 2, name: 'Packages & Pricing', item: 'https://www.blossompartylawn.in/packages' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does ₹7,00,000 include at Blossom Party Lawn?', acceptedAnswer: { '@type': 'Answer', text: 'It is the exclusive full-day venue rent for the complete grounds — lawn, plaza, stage arena, dining court and parking — from 10:00 AM to 10:00 PM, with power backup and standard readiness included.' } },
    { '@type': 'Question', name: 'How are catering charges estimated?', acceptedAnswer: { '@type': 'Answer', text: 'Per-plate costing follows your chosen menu, cuisine and counter styles. Typical Ahmedabad spreads range ₹500–₹1,500 per plate and are itemised in writing.' } },
    { '@type': 'Question', name: 'How far in advance is a date reserved?', acceptedAnswer: { '@type': 'Answer', text: 'Signature and Grand tiers for October–February weekends are usually reserved 4–9 months ahead. A token booking immediately locks the date; free provisional holds run for 7 days.' } },
    { '@type': 'Question', name: 'What payment modes are accepted?', acceptedAnswer: { '@type': 'Answer', text: 'Cash, UPI, Paytm, Google Pay, PhonePe and Net Banking. Split schedules — token, midpoint, wrap — are flexible within the agreed timeline.' } },
    { '@type': 'Question', name: 'Can we visit before deciding?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely — site visits happen daily within business hours. Call or WhatsApp +91 84708 04805 to fix your walkthrough slot with a layout demo.' } },
  ],
};

const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4 10-10" /></svg>;
const CHECK17 = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 13l4 4 10-10" /></svg>;

const TIERS: { h: string; name: string; price: React.ReactNode; items: React.ReactNode[]; btn: React.ReactNode }[] = [
  {
    h: 'Intimate',
    name: 'The Meadow',
    price: <><sup>₹</sup>4.5 L<em> / full-day venue</em></>,
    items: [
      <>{CHECK} Garden court for up to 300 guests</>,
      <>{CHECK} Standard mandap <em>or</em> stage build</>,
      <>{CHECK} Power backup &amp; ample parking</>,
      <>{CHECK} Outside catering &amp; décor allowed</>,
      <>{CHECK} Event window 10 AM – 10 PM</>,
      <>{CHECK} Vendor desk &amp; layout planning</>,
    ],
    btn: <Link className="btn btn-line" href="/contact">Ask a Question</Link>,
  },
  {
    h: 'Signature',
    name: 'The Blossom',
    price: <><sup>₹</sup>7.0 L<em> / full-day booking</em></>,
    items: [
      <>{CHECK} Complete lawn for 250–600 guests</>,
      <>{CHECK} Grand entry plaza + baraat welcome</>,
      <>{CHECK} Stage &amp; LED wall with DJ coordination</>,
      <>{CHECK} Buffet-court styling with live counters</>,
      <>{CHECK} Custom menus with premium caterers</>,
      <>{CHECK} Dedicated event-day manager</>,
    ],
    btn: <Mag className="btn btn-gold" href="/contact">Enquire for This Tier <span className="arr">→</span></Mag>,
  },
  {
    h: 'Grand',
    name: 'The Grand Bloom',
    price: <>On Request<em> / bespoke formats</em></>,
    items: [
      <>{CHECK} Multi-event day: haldi → sangeet → reception</>,
      <>{CHECK} Designer décor pillars &amp; theme lounges</>,
      <>{CHECK} Fireworks-runtime finale coordination</>,
      <>{CHECK} Family itinerary &amp; guest-flow charts</>,
      <>{CHECK} Corporate: brand stages, LED runs, seminars</>,
      <>{CHECK} Provisional date-hold for 7 days</>,
    ],
    btn: <Link className="btn btn-line" href="/contact">Request Custom Quote</Link>,
  },
];

export default function Packages() {
  return (
    <>
      <Ld data={crumbLd} />
      <Ld data={faqLd} />

      <Ph
        img="/images/venue-6.png"
        crumb="Packages & Pricing"
        title={<h1 className="display">Priced Like a <em className="script">Friend Would</em></h1>}
        sub="Full-day venue booking from ₹7,00,000; menus and décor quoted to taste — written down, never guessed."
      />

      <section className="section" id="tiers">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">The Tiers <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>One lawn, <em className="script">three ways to bloom</em></h2>
              <p className="lead reveal" style={dl('0.16s')}>Every tier includes fresh turf readiness, event-day support and access to our vendor desk. Catering stays yours — outside caterers welcome.</p>
            </div>
            <div className="pk-grid stagger reveal">
              {TIERS.map((t, ix) => (
                <Tilt key={t.name} className={'pk-card' + (ix === 1 ? ' feature' : '')} strength={4}>
                  {ix === 1 ? <span className="pk-flag">Most Chosen ✿</span> : null}
                  <span className="pk-h">{t.h}</span>
                  <h3 className="pk-name">{t.name}</h3>
                  <div className="pk-price">{t.price}</div>
                  <ul className="pk-list">{t.items.map((li, j) => <li key={j}>{li}</li>)}</ul>
                  {t.btn}
                </Tilt>
              ))}
            </div>
            <p className="pk-note reveal">Venue rental figures reflect full-day, exclusive-use booking of the grounds. Catering, décor and entertainment are then quoted per plate and per theme — no hidden line items.</p>
          </Rv>
        </div>
      </section>

      <section className="section section--paper" id="included">
        <div className="container">
          <Rv>
            <div className="split">
              <div className="split-img reveal" data-reveal="left">
                <img src="/images/venue-4.png" alt="Manicured lawn with buffet counters — included venue readiness" loading="lazy" />
                <span className="tag">What You Get</span>
              </div>
              <div className="split-copy">
                <p className="eyebrow reveal">In Every Booking <span className="dot">✿</span></p>
                <h2 className="h2 reveal" style={dl('0.08s')}>The inclusions that <em className="script">come standard</em></h2>
                <ul className="about-points">
                  <li className="reveal" style={dl('0.14s')}>{CHECK17} Freshly groomed lawns, paved courts &amp; clean sightlines</li>
                  <li className="reveal" style={dl('0.2s')}>{CHECK17} Full-event power backup and house lighting</li>
                  <li className="reveal" style={dl('0.26s')}>{CHECK17} Parking coordination &amp; entry-flow management</li>
                  <li className="reveal" style={dl('0.32s')}>{CHECK17} Mandap / stage placement planning with layout maps</li>
                  <li className="reveal" style={dl('0.38s')}>{CHECK17} Vendor desk access — decorators, caterers, DJs, photographers</li>
                  <li className="reveal" style={dl('0.44s')}>{CHECK17} Event-day manager &amp; support staff till wrap-up</li>
                </ul>
                <div className="btn-row reveal" style={dl('0.5s')}><Link className="btn btn-dark" href="/contact">Get the Written Quote <span className="arr">→</span></Link></div>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <Band img="/images/atmos-lamps-1.jpg" speed={0.3}>
        <div className="container">
          <Rv>
            <p className="eyebrow reveal">Season Note</p>
            <h2 className="display reveal" style={dl('0.08s')}>Diwali-diya evenings, garba moons —<br /><em className="script">the calendar fills fast</em></h2>
            <p className="lead reveal" style={dl('0.16s')}>October–February weekends are booked out first. Provisional holds are free for 7 days while final decisions are made at home.</p>
            <div className="btn-row reveal" style={dl('0.24s')}>
              <Mag className="btn btn-gold" href="/contact">Hold My Dates <span className="arr">→</span></Mag>
            </div>
          </Rv>
        </div>
      </Band>

      <section className="section" id="faq">
        <div className="container">
          <Rv>
            <Faqs
              head={
                <div className="section-head center">
                  <p className="eyebrow reveal">Booking FAQs <span className="dot">✿</span></p>
                  <h2 className="h2 reveal" style={dl('0.08s')}>The money-<em className="script">talks</em> section</h2>
                </div>
              }
              items={[
                { q: 'What does ₹7,00,000 include?', a: 'It is the exclusive full-day venue rent for the complete grounds — lawn, plaza, stage arena, dining court and parking — from 10:00 AM to 10:00 PM, with power backup and standard readiness included.' },
                { q: 'How are catering charges estimated?', a: 'Per-plate costing follows your chosen menu, cuisine and counter styles with our empanelled or your own caterers. Typical Ahmedabad spreads range ₹500–₹1,500 per plate and are itemised in writing.' },
                { q: 'How far in advance is a date reserved?', a: 'Signature and Grand tiers for October–February weekends are usually reserved 4–9 months ahead. A token booking immediately locks the date; free provisional holds run for 7 days.' },
                { q: 'What payment modes are accepted?', a: 'Cash, UPI, Paytm, Google Pay, PhonePe and Net Banking. Split schedules — token, midpoint, wrap — are flexible within the agreed timeline.' },
                { q: 'Can we visit before deciding?', a: 'Absolutely — site visits happen daily within business hours. Call or WhatsApp +91 84708 04805 to fix your walkthrough slot with a layout demo.' },
              ]}
            />
          </Rv>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Rv>
            <div className="cta-frame">
              <span className="script reveal">Numbers speak softly here…</span>
              <h2 className="display reveal" style={dl('0.08s')}>Write to us &amp;<br /><em className="script">get it in ink</em></h2>
              <div className="btn-row reveal" style={dl('0.2s')}>
                <Mag className="btn btn-gold" href="/contact">Request Written Quote <span className="arr">→</span></Mag>
                <Link className="btn btn-ghost" href="/about">Know the Venue First</Link>
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
