import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Counter from '@/components/Counter';
import Band from '@/components/Band';
import Gal from '@/components/Gal';
import Tst from '@/components/Tst';
import Faqs from '@/components/Faqs';
import Mag from '@/components/Mag';
import { Tilt, TiltA } from '@/components/Tilt';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'Blossom Party Lawn — Premier Wedding & Party Lawn in Ognaj, Ahmedabad' },
  alternates: { canonical: '/' },
};

const venueLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Blossom Party Lawn',
  alternateName: 'Blossom Party Plot Ognaj',
  description: 'Lush open-air party lawn in Ognaj, Ahmedabad for weddings, receptions, garba and sangeet nights, birthdays and corporate events. Capacity 250-600 guests with mandap setups, outdoor catering, DJ, power backup and ample parking.',
  url: 'https://www.blossompartylawn.in/',
  telephone: '+91-8470804805',
  image: 'https://www.blossompartylawn.in/images/venue-4.png',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Paytm, Google Pay, PhonePe, Net Banking',
  address: { '@type': 'PostalAddress', streetAddress: 'New Science City Road, Vasantnagar Township, Ognaj', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', postalCode: '380060', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 23.1181, longitude: 72.5438 },
  openingHours: 'Mo-Su 10:00-22:00',
  maximumAttendeeCapacity: 600,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Party Lawn' },
    { '@type': 'LocationFeatureSpecification', name: 'Marriage Lawn' },
    { '@type': 'LocationFeatureSpecification', name: 'Mandap Setup' },
    { '@type': 'LocationFeatureSpecification', name: 'DJ Available' },
    { '@type': 'LocationFeatureSpecification', name: 'Power Backup' },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor Catering' },
    { '@type': 'LocationFeatureSpecification', name: 'Baarat Allowed' },
    { '@type': 'LocationFeatureSpecification', name: 'Fireworks Permitted' },
    { '@type': 'LocationFeatureSpecification', name: 'Hawan Allowed' },
    { '@type': 'LocationFeatureSpecification', name: 'Ample Parking' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', bestRating: '5', ratingCount: '2' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the guest capacity of Blossom Party Lawn, Ahmedabad?', acceptedAnswer: { '@type': 'Answer', text: 'The lush outdoor lawn comfortably hosts 250 to 600 guests depending on your seating and stage layout.' } },
    { '@type': 'Question', name: 'Where is Blossom Party Lawn located?', acceptedAnswer: { '@type': 'Answer', text: 'New Science City Road, Vasantnagar Township, Ognaj, Ahmedabad, Gujarat 380060 - minutes from Gota and the S P Ring Road.' } },
    { '@type': 'Question', name: 'What are the event timings at Blossom Party Lawn?', acceptedAnswer: { '@type': 'Answer', text: 'Events run from 10:00 AM to 10:00 PM daily.' } },
    { '@type': 'Question', name: 'Is outside catering allowed at Blossom Party Lawn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, outside caterers are welcome. Liquor is neither served nor permitted on the premises.' } },
    { '@type': 'Question', name: 'What is the full-day booking price at Blossom Party Lawn?', acceptedAnswer: { '@type': 'Answer', text: 'Full-day venue booking starts at INR 7,00,000. Per-plate catering is customised to your menu on request.' } },
  ],
};

const OCCS: { href: string; img: string; alt: string; tag: string; h3: string; p: string }[] = [
  { href: '/occasions#weddings', img: '/images/occ-mandap-1.jpg', alt: 'Traditional wedding mandap with floral pillars', tag: '01 · Weddings', h3: 'The Wedding Mandap', p: 'Baraat welcome, hawan-blessed rituals and a floral pavilion framed by palms.' },
  { href: '/occasions#receptions', img: '/images/venue-6.png', alt: 'Evening reception seating and golden stage decor', tag: '02 · Receptions', h3: 'Reception Nights', p: 'Golden stages, LED-lit lawns and village-fair buffet counters that dazzle.' },
  { href: '/occasions#garba', img: '/images/occ-garba-1.jpg', alt: 'Couples dancing garba in festive circles at night', tag: '03 · Garba & Sangeet', h3: 'Garba & Sangeet Nights', p: 'Circles of colour and dhol-thumps — nine nights of open-sky euphoria.' },
  { href: '/occasions#prewedding', img: '/images/occ-haldi-1.jpg', alt: 'Haldi ceremony celebration with family', tag: '04 · Haldi & Mehndi', h3: 'Haldi & Mehndi Afternoons', p: 'Turmeric sun, marigold backgrounds and laughter drifting over the greens.' },
  { href: '/occasions#birthdays', img: '/images/brand-flowers-1.jpg', alt: 'Blush pink blossoms — celebration decor backdrop', tag: '05 · Birthdays', h3: 'Birthdays & Showers', p: 'Expect theme-set tables, candy stations and room for little feet to dart.' },
  { href: '/occasions#corporate', img: '/images/venue-2.png', alt: 'LED stage wall and professional lighting on lawn at night', tag: '06 · Corporate', h3: 'Corporate Gatherings', p: 'Dealer meets, annual days and seminars with stage-first production support.' },
];

const AMEN: { no: string; ic: React.ReactNode; h4: string; p: string }[] = [
  { no: '01', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>, h4: 'DJ & Sound', p: 'In-house DJ service available on request for sangeet, receptions and garba.' },
  { no: '02', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2 4.5 13.5h6L11 22l8.5-11.5h-6L13 2z" strokeLinejoin="round" /></svg>, h4: 'Power Backup', p: 'Full-event generator backup — the lights never miss a beat.' },
  { no: '03', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20h16M5 20V9h14v11M9 20V12m6 8v-8M3 9l9-5 9 5" strokeLinejoin="round" /></svg>, h4: 'Mandap & Stage', p: 'Customised mandap, stage, backdrop and décor layouts per event.' },
  { no: '04', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 21V7l12-4v16" /><circle cx="5" cy="21" r="3" /><circle cx="18" cy="19" r="3" /></svg>, h4: 'Outdoor Catering', p: 'Outside caterers allowed — your menu, your flavours, from caterers of your choice.' },
  { no: '05', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14M5 11v6h2m10-6v6h-2M7 17h10M7 17v2m10-2v2" strokeLinecap="round" /></svg>, h4: 'Ample Parking', p: 'Palm-lined paved courts absorb the busiest valet nights with ease.' },
  { no: '06', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-6-4.6-6-9.5A6 6 0 0 1 12 6a6 6 0 0 1 6 5.5C18 16.4 12 21 12 21z" strokeLinejoin="round" /><circle cx="12" cy="11" r="2.2" /></svg>, h4: 'Baraat Welcome', p: 'Grand paved entry court made for dhol-procession arrivals.' },
  { no: '07', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c4 0 7-3 7-7 0-3-2-5.5-3.5-7C15 10 14 10.5 14 8c0-2.5-1-5-2-6-.5 3-1.5 4-3 6.5C7.5 11 5 13 5 15c0 4 3 7 7 7z" strokeLinejoin="round" /></svg>, h4: 'Hawan Allowed', p: 'Vedic rituals welcome — a purposeful space for sacred beginnings.' },
  { no: '08', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v3m0 12v3m-9-9h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" /><circle cx="12" cy="12" r="3.2" /></svg>, h4: 'Fireworks Allowed', p: 'Spark-approved bursts to crown the finale under open skies.' },
  { no: '09', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20c3-6 6-9 9-10m-9 10c6-1 9-3 12-7M12 10c.5-4 3-7 9-7-1 6-4 9-8 9.5" strokeLinecap="round" /><path d="M3 20h18" strokeLinecap="round" /></svg>, h4: 'Manicured Lawns', p: 'Balmy, breeze-touched greens maintained to photography-ready sheen.' },
  { no: '10', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M8.5 16v-4.2A3.2 3.2 0 0 1 12 8.5c1.6 0 3 .9 3 2.4s-1.2 2.1-3 2.1h-1.8" strokeLinecap="round" /></svg>, h4: 'Event Support', p: 'A dedicated team coordinates vendors, timelines and guest flow.' },
];

const PREV: { src: string; cat: string; cap: string; alt: string; cls?: string }[] = [
  { src: '/images/venue-4.png', cat: 'lawn day', cap: 'Lawn & Live Counters', alt: 'Manicured lawn with decorated buffet counters and palm trees at Blossom Party Lawn', cls: 'tall' },
  { src: '/images/venue-1.png', cat: 'decor', cap: 'Grand Entry Plaza', alt: 'Grand paved arrival plaza framed by greenery' },
  { src: '/images/occ-mandap-2.jpg', cat: 'decor', cap: 'Mandap Décor', alt: 'Indian wedding mandap floral decoration' },
  { src: '/images/venue-2.png', cat: 'evenings', cap: 'Stage & LED Wall', alt: 'Stage with LED wall and pink lighting on the lawn at night', cls: 'tall' },
  { src: '/images/occ-garba-1.jpg', cat: 'occasions', cap: 'Garba Nights', alt: 'Garba couple dancing at ceremony' },
  { src: '/images/atmos-lamps-1.jpg', cat: 'evenings', cap: 'Diyas & Dusk', alt: 'Row of glowing oil lamps at dusk' },
  { src: '/images/venue-3.png', cat: 'evenings decor', cap: 'Evening Arrival Canopy', alt: 'Decorated entrance canopy in teal and magenta at night', cls: 'wide' },
];

const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4 10-10" /></svg>;

export default function Home() {
  return (
    <>
      <Ld data={venueLd} />
      <Ld data={faqLd} />

      <Hero />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Weddings <i className="mk">✿</i> Receptions <i className="mk">✿</i> Garba Nights <i className="mk">✿</i> Sangeet <i className="mk">✿</i> Ring Ceremonies <i className="mk">✿</i> Monthly Milestones <i className="mk">✿</i> Baby Showers <i className="mk">✿</i> Kitty Parties <i className="mk">✿</i> Corporate Meets <i className="mk">✿</i> Anniversaries <i className="mk">✿</i></span>
          <span>Weddings <i className="mk">✿</i> Receptions <i className="mk">✿</i> Garba Nights <i className="mk">✿</i> Sangeet <i className="mk">✿</i> Ring Ceremonies <i className="mk">✿</i> Monthly Milestones <i className="mk">✿</i> Baby Showers <i className="mk">✿</i> Kitty Parties <i className="mk">✿</i> Corporate Meets <i className="mk">✿</i> Anniversaries <i className="mk">✿</i></span>
        </div>
      </div>

      <section className="section" id="intro">
        <div className="container">
          <Rv>
            <div className="about-grid">
              <div className="collage reveal" data-reveal="left">
                <div className="collage-img collage-big"><img src="/images/venue-6.png" alt="Golden floral stage decor and evening seating rows at Blossom Party Lawn Ahmedabad" loading="lazy" /></div>
                <div className="collage-img lt"><img src="/images/venue-3.png" alt="Evening arrival canopy with garden lighting at Blossom Party Lawn" loading="lazy" /></div>
                <div className="collage-badge"><b>4.6★</b><span>Guest Rated</span></div>
              </div>
              <div className="about-copy">
                <p className="eyebrow reveal">The Venue <span className="dot">✿</span> Ognaj, Ahmedabad</p>
                <h2 className="h2 reveal" style={dl('0.1s')}>A garden wedding venue that feels <em className="script">serenely yours</em></h2>
                <p className="lead reveal" style={dl('0.18s')}>A few minutes from Gota — just off S P Ring Road at Ognaj — 1.5+ acres of manicured lawn, palm-lined courts and a grand paved arrival plaza set the stage for celebrations under open skies.</p>
                <ul className="about-points">
                  <li className="reveal" style={dl('0.22s')}>{CHECK} Best for weddings, receptions, garba nights, kitty parties &amp; corporate meets</li>
                  <li className="reveal" style={dl('0.3s')}>{CHECK} Flexible layouts — mandap, stage &amp; LED wall, round-table or lounge seating</li>
                  <li className="reveal" style={dl('0.38s')}>{CHECK} Outside caterers welcome, hawan &amp; baraat traditions honoured</li>
                  <li className="reveal" style={dl('0.46s')}>{CHECK} Ample on-site parking, power backup &amp; a dedicated events team</li>
                </ul>
                <div className="btn-row reveal" style={dl('0.54s')}>
                  <Link className="btn btn-dark" href="/about">Discover the Space <span className="arr">→</span></Link>
                  <Link className="btn btn-line" href="/gallery">View Gallery</Link>
                </div>
                <div className="signature reveal" style={dl('0.6s')}>
                  <span className="script">Celebrate under open skies,</span>
                  <small>The Blossom Promise</small>
                </div>
              </div>
            </div>

            <div className="counters stagger reveal">
              <Counter n={600} suffix="+" label="Guests Capacity" />
              <Counter n={4.6} suffix="★" label="Guest Rating" dec={1} />
              <Counter n={12} suffix="hrs" label="Daily Event Window" />
              <Counter n={100} suffix="%" label="Open-Air Greens" />
            </div>
          </Rv>
        </div>
      </section>

      <section className="section section--paper" id="occasions">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Made for Every Occasion <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Spaces that shape themselves around <em className="script">your moment</em></h2>
              <p className="lead reveal" style={dl('0.16s')}>From sundown vows to full-moon garba — the lawn flexes from grand mandap to lounge-café intimacy, one celebration at a time.</p>
            </div>
            <div className="occ-grid stagger reveal">
              {OCCS.map((o) => (
                <TiltA key={o.href} href={o.href} strength={5}>
                  <img src={o.img} alt={o.alt} loading="lazy" />
                  <i className="occ-shade"></i><span className="occ-tag">{o.tag}</span>
                  <div className="occ-body"><h3>{o.h3}</h3><p>{o.p}</p><span className="olink">Plan yours <i>→</i></span></div>
                </TiltA>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <Band img="/images/venue-2.png" speed={0.25}>
        <div className="container">
          <Rv>
            <p className="eyebrow reveal">One Evening, Start to Finish</p>
            <h2 className="display reveal" style={dl('0.08s')}>Grand entry, glowing stage,<br /><em className="script">and room for everyone</em></h2>
            <p className="lead reveal" style={dl('0.16s')}>A paved welcome court for the baraat, palm-flanked parking, a stage-and-LED main arena and decorated buffet counters — engineered so nothing, and no one, is left waiting.</p>
            <div className="btn-row reveal" style={dl('0.24s')}>
              <Mag className="btn btn-gold" href="/contact">Plan a Site Visit <span className="arr">→</span></Mag>
              <Link className="btn btn-ghost" href="/occasions">All Occasions</Link>
            </div>
          </Rv>
        </div>
      </Band>

      <section className="section section--dark" id="amenities">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Everything in Place <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Amenities that let you stay <em className="script">joyfully unbothered</em></h2>
            </div>
            <div className="amen-grid stagger reveal">
              {AMEN.map((a) => (
                <div className="amen" key={a.no}><span className="amen-no">{a.no}</span>{a.ic}<h4>{a.h4}</h4><p>{a.p}</p></div>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <section className="section" id="gallery-preview">
        <div className="container">
          <Rv>
            <div className="section-head">
              <p className="eyebrow reveal">The Gallery <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Evenings at Blossom, <em className="script">lens-tested</em></h2>
            </div>
            <Gal items={PREV} />
            <div className="gal-more reveal"><Link className="btn btn-dark" href="/gallery">Open the Full Gallery <span className="arr">→</span></Link></div>
          </Rv>
        </div>
      </section>

      <section className="section section--dark section-tst" id="testimonials">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Guest Diaries <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Evenings that became <em className="script">favourite stories</em></h2>
            </div>
            <Tst />
          </Rv>
        </div>
      </section>

      <section className="section section--paper" id="packages-preview">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Booking Made Simple <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>One venue, <em className="script">three ways to bloom</em></h2>
              <p className="lead reveal" style={dl('0.16s')}>Full-day bookings from ₹7,00,000 with per-plate catering quoted to your menu — transparent, itemised, and planned to the last marigold.</p>
            </div>
            <div className="pk-grid stagger reveal">
              <Tilt className="pk-card" strength={4}>
                <span className="pk-h">Intimate</span>
                <h3 className="pk-name">The Meadow</h3>
                <div className="pk-price">From ₹4.5 L<em> / full-day venue</em></div>
                <ul className="pk-list">
                  <li>{CHECK} Lawn up to 300 guests</li>
                  <li>{CHECK} Standard mandap or stage setup</li>
                  <li>{CHECK} Power backup &amp; parking included</li>
                  <li>{CHECK} Outside catering permitted</li>
                </ul>
                <Link className="btn btn-line" href="/packages">Details &amp; Upgrade Paths</Link>
              </Tilt>
              <Tilt className="pk-card feature" strength={4}>
                <span className="pk-flag">Most Chosen ✿</span>
                <span className="pk-h">Signature</span>
                <h3 className="pk-name">The Blossom</h3>
                <div className="pk-price">₹7.0 L<em> / full-day booking</em></div>
                <ul className="pk-list">
                  <li>{CHECK} Full lawn for 250–600 guests</li>
                  <li>{CHECK} Grand entry court + baraat welcome</li>
                  <li>{CHECK} Stage, LED wall &amp; DJ coordination</li>
                  <li>{CHECK} Custom menu with premium caterers</li>
                  <li>{CHECK} Event-window 10:00 AM – 10:00 PM</li>
                </ul>
                <Mag className="btn btn-gold" href="/contact">Enquire for This <span className="arr">→</span></Mag>
              </Tilt>
              <Tilt className="pk-card" strength={4}>
                <span className="pk-h">Grand</span>
                <h3 className="pk-name">The Grand Bloom</h3>
                <div className="pk-price">On Request<em> / bespoke</em></div>
                <ul className="pk-list">
                  <li>{CHECK} Multi-function day: haldi → sangeet → reception</li>
                  <li>{CHECK} Designer décor pillars &amp; thematic lounges</li>
                  <li>{CHECK} Fireworks-permitted finale coordination</li>
                  <li>{CHECK} Dedicated event manager for the family</li>
                </ul>
                <Link className="btn btn-line" href="/packages">Request a Custom Quote</Link>
              </Tilt>
            </div>
            <p className="pk-note reveal">Prices reflect full-day venue booking; catering &amp; décor are customised and quoted per plate. Payments accepted via Cash, UPI, Paytm, G-Pay, PhonePe &amp; Net Banking.</p>
          </Rv>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <Rv>
            <Faqs
              head={
                <div className="section-head center">
                  <p className="eyebrow reveal">Good to Know <span className="dot">✿</span></p>
                  <h2 className="h2 reveal" style={dl('0.08s')}>Questions families <em className="script">always ask us</em></h2>
                </div>
              }
              items={[
                { q: 'What is the guest capacity of Blossom Party Lawn?', a: 'The lush outdoor lawn comfortably hosts 250–600 guests depending on your chosen seating: floating, round-table or theatre-style arrangements.' },
                { q: 'Where exactly is the venue located?', a: 'Off New Science City Road at Vasantnagar Township, Ognaj, Ahmedabad 380060 — minutes from Gota and the S P Ring Road, with easy drives from Chandkheda, Motera and central Ahmedabad.' },
                { q: 'What are the daily event timings?', a: 'Events and celebrations run from 10:00 AM to 10:00 PM — ideal for haldi mornings through to reception evenings.' },
                { q: 'Can we bring our own caterers and décor team?', a: 'Yes — outside caterers are welcome at Blossom Party Lawn, and décor can be fully customised. Liquor is neither served nor permitted on the premises.' },
                { q: 'Is parking available for guests?', a: 'Ample on-site parking — palm-lined paved courts comfortably absorb wedding-scale arrivals including the baraat procession.' },
                { q: 'How do I reserve a date?', a: 'Enquire via the booking form, WhatsApp or call +91 84608 20640. We confirm availability, quote your menu, and a token booking locks your date.' },
              ]}
            />
          </Rv>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Rv>
            <div className="cta-frame">
              <span className="script reveal">Before the petals fall…</span>
              <h2 className="display reveal" style={dl('0.08s')}>Reserve your date<br /><em className="script">under the stars</em></h2>
              <p className="lead reveal" style={dl('0.16s')}>Wedding-season weekends are claimed early. Tell us your date — we&apos;ll hold it while you decide.</p>
              <div className="btn-row reveal" style={dl('0.24s')}>
                <Mag className="btn btn-gold" href="/contact">Start the Enquiry <span className="arr">→</span></Mag>
                <Link className="btn btn-ghost" href="tel:+918470820640">Call +91 84608 20640</Link>
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
