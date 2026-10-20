import type { Metadata } from 'next';
import Link from 'next/link';
import Ph from '@/components/Ph';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Band from '@/components/Band';
import Mag from '@/components/Mag';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'The Venue — Blossom Party Lawn, Ognaj Ahmedabad | Open-Air Marriage & Party Lawn' },
  description: 'Meet Blossom Party Lawn — 1.5+ acres of manicured lawn, grand paved entry, palm-lined parking courts, stage & LED arena on New Science City Road, Ognaj, Ahmedabad. Capacity 250–600 guests, events daily 10 AM–10 PM.',
  keywords: ['Blossom Party Lawn about', 'party lawn Ognaj details', 'marriage lawn New Science City Road', 'wedding garden Gota Ahmedabad', 'venue facts Ahmedabad 380060'],
  alternates: { canonical: '/about' },
  openGraph: { title: 'The Venue — Blossom Party Lawn, Ognaj Ahmedabad', description: 'Manicured greens, a grand arrival court and an open-sky arena engineered for celebration.', images: ['/images/venue-1.png'] },
};

const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blossompartylawn.in/' },
    { '@type': 'ListItem', position: 2, name: 'The Venue', item: 'https://www.blossompartylawn.in/about' },
  ],
};

const venueLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Blossom Party Lawn',
  description: 'Lush open-air party lawn in Ognaj, Ahmedabad for weddings, receptions, garba and sangeet nights, birthdays and corporate events.',
  url: 'https://www.blossompartylawn.in/about',
  telephone: '+91-8470804805',
  image: 'https://www.blossompartylawn.in/images/venue-1.png',
  address: { '@type': 'PostalAddress', streetAddress: 'New Science City Road, Vasantnagar Township, Ognaj', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', postalCode: '380060', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 23.1181, longitude: 72.5438 },
  openingHours: 'Mo-Su 10:00-22:00',
  priceRange: '₹₹',
};

const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 13l4 4 10-10" /></svg>;

const SPACES: { ic: React.ReactNode; h4: string; p: string; tag: string }[] = [
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-5.5L21 9M5 20v-8m4.5 8v-8m5 8v-8m4.5 8v-8M3 20h18" strokeLinecap="round" /></svg>, h4: 'Grand Entry Plaza', p: 'A wide paved forecourt with a celebratory arch — baraat processions, guest registration and first-glance photographs begin here.', tag: 'Marriage-Lawn Certified' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" strokeLinecap="round" /></svg>, h4: 'The Main Lawn', p: 'The celebration heart — floating toasts, round tables, mandap centrepiece or dance-floor arena, re-grassed for event readiness.', tag: '250–600 Guests' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="7" rx="1.5" /><path d="M6.5 15v2.5m11-2.5v2.5M5 11.5h3m8 0h3" strokeLinecap="round" /></svg>, h4: 'Stage & LED Arena', p: 'Elevated stage with LED backdrops, moving-head washes and confetti-ready sightlines for receptions and sangeet productions.', tag: 'Performance-Ready' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M9 3v4m6-4v4M9 11h6m-6 4h4" strokeLinecap="round" /></svg>, h4: 'Dining & Buffet Court', p: 'Decorated counters with themed spreads — the counter-row design keeps queues flowing and plating photogenic.', tag: 'Live Counters' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14M5 11v6h2m10-6v6h-2M7 17h10M7 17v2m10-2v2" strokeLinecap="round" /></svg>, h4: 'Palm Parking Court', p: 'Ample paved parking framed by date palms, with clear entry/exit lanes that keep the busiest evenings calm.', tag: 'Ample Parking' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-5.3-7-10.3A7.2 7.2 0 0 1 12 3.5a7.2 7.2 0 0 1 7 7.2c0 5-7 10.3-7 10.3z" strokeLinejoin="round" /><circle cx="12" cy="10.5" r="2.4" /></svg>, h4: 'Evening Arrival Canopy', p: 'A softly-lit, draped canopy for welcomes and farewell hugs — nights begin and end under its glow.', tag: 'Photogenic Moments' },
];

const VALUES: { ic: React.ReactNode; h4: string; p: string }[] = [
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.3" /></svg>, h4: 'Green, Serene & Well-Kept', p: 'Lawns trimmed, paths paved, corners cleaned — the grounds are reset to a fresh start before every single event.' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M8.5 16v-4.2A3.2 3.2 0 0 1 12 8.5c1.6 0 3 .9 3 2.4s-1.2 2.1-3 2.1h-1.8" strokeLinecap="round" /></svg>, h4: 'People-First Hospitality', p: 'A dedicated events team coordinates vendors, seating maps and guest flow so hosts stay hosts — not supervisors.' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 10h18m-6 4.5h4" strokeLinecap="round" /></svg>, h4: 'Flexible by Design', p: 'Mandap centre-stage or lounge-café intimacy, round tables or theatre rows — the lawn reshapes around your plan.' },
  { ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2 4.5 13.5h6L11 22l8.5-11.5h-6L13 2z" strokeLinejoin="round" /></svg>, h4: 'Modern Infrastructure', p: 'Power backup, DJ, lighting trusses and LED support — celebrations run on uninterrupted, event-grade infrastructure.' },
];

const TIMELINE = [
  { when: 'Step 01', h4: 'Enquire & Check Your Date', p: 'Call, WhatsApp or the booking form — we confirm availability for 10 AM–10 PM windows and hold provisional dates.' },
  { when: 'Step 02', h4: 'Walk the Grounds', p: "Visit the entry plaza, lawn, stage arena and dining court; map the day with our team — layouts, counters, kids' zones." },
  { when: 'Step 03', h4: 'Customise the Details', p: 'Menu tastings with outside caterers, décor themes, stage runs and sound checks — itemised to your date and budget.' },
  { when: 'Step 04', h4: 'Book with a Token', p: 'Your date is locked with a booking token. Balance as per the agreed schedule — Cash, UPI, G-Pay, PhonePe or Net Banking.' },
  { when: 'Step 05', h4: 'Celebrate, We Handle the Rest', p: 'Grounds ready before guests arrive, generators on standby, a manager on the field — you simply welcome the smiles.' },
];

const POLICIES: [string, string][] = [
  ['Event Timings', '10:00 AM – 10:00 PM, all days'],
  ['Liquor', 'Not served or permitted'],
  ['Outside Catering', 'Allowed — tastings arranged'],
  ['DJ & Sound', 'Available (chargeable)'],
  ['Hawan / Rituals', 'Allowed in designated mandap'],
  ['Baat / Baraat Entry', 'Grand paved court welcome'],
  ['Fire Crackers', 'Permitted for finale moments'],
  ['Payments', 'Cash, UPI, Paytm, G-Pay, PhonePe, Net Banking'],
];

export default function About() {
  return (
    <>
      <Ld data={crumbLd} />
      <Ld data={venueLd} />

      <Ph
        img="/images/brand-blossom-1.jpg"
        crumb="The Venue"
        title={<h1 className="display">A Stage Made of <em className="script">Sky &amp; Greens</em></h1>}
        sub="The story, the spaces and the standards behind Ognaj's most Loved party lawn — 250 to 600 guests, one unforgettable canvas."
      />

      <div className="container"><Rv><div className="hours-bar reveal"><span className="dotv">●</span> Events Daily, 10:00 AM – 10:00 PM &nbsp;·&nbsp; Rated 4.6★ by Guests &nbsp;·&nbsp; Ognaj, Ahmedabad 380060</div></Rv></div>

      <section className="section" id="story">
        <div className="container">
          <Rv>
            <div className="split">
              <div className="split-img reveal" data-reveal="left">
                <img src="/images/venue-1.png" alt="Grand paved entry arbour of Blossom Party Lawn framed by lush greenery" loading="lazy" />
                <span className="tag">The Grand Arrival</span>
              </div>
              <div className="split-copy">
                <p className="eyebrow reveal">Our Story <span className="dot">✿</span></p>
                <h2 className="h2 reveal" style={dl('0.08s')}>Born from a simple idea — <em className="script">celebrations deserve open skies</em></h2>
                <p className="lead reveal" style={dl('0.16s')}>In the fast-growing north-west of Ahmedabad, between Gota and New Science City Road, Blossom Party Lawn was shaped as a garden escape for the city&apos;s big days — a lawn where the breeze sets the pace and the evenings glow gold.</p>
                <p className="lead reveal" style={dl('0.22s')}>Over the years, our courts and greens have hosted pheras under floral mandaps, nine-night garba marathons, dealer galas and first-birthday picnics — each staged with the same quiet standard: guests arrive to grandeur, and leave already talking about the food.</p>
                <div className="divider-facts">
                  <div className="fact reveal" style={dl('0.3s')}><b>250 – 600</b><span>Guests Hosted</span></div>
                  <div className="fact reveal" style={dl('0.36s')}><b>New Science City Rd</b><span>Prime Ognaj Location</span></div>
                  <div className="fact reveal" style={dl('0.42s')}><b>Outside Catering</b><span>Family&apos;s Own Flavours</span></div>
                  <div className="fact reveal" style={dl('0.48s')}><b>Vegan-friendly Menus</b><span>Pure-Veg Available</span></div>
                </div>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <section className="section section--paper section-tight" id="spaces" style={{ paddingTop: 'clamp(56px,7vw,90px)' }}>
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">The Spaces <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Walk the grounds — <em className="script">court by court</em></h2>
            </div>
            <div className="svc-list stagger reveal">
              {SPACES.map((s) => (
                <div className="svc" key={s.h4}>{s.ic}<h4>{s.h4}</h4><p>{s.p}</p><span className="more">{s.tag}</span></div>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">The Blossom Way <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Four promises we <em className="script">never skip</em></h2>
            </div>
            <div className="grid-2 stagger reveal">
              {VALUES.map((v) => (
                <div className="value-card" key={v.h4}>{v.ic}<h4>{v.h4}</h4><p>{v.p}</p></div>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <section className="section section--dark" id="journey">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Your Journey With Us <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>From first call to <em className="script">final sparkler</em></h2>
            </div>
            <div className="timeline stagger reveal">
              {TIMELINE.map((t) => (
                <div className="tl-item" key={t.when}><span className="when">{t.when}</span><h4>{t.h4}</h4><p>{t.p}</p></div>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <Band img="/images/city-ahm-1.jpg" speed={0.3}>
        <div className="container">
          <Rv>
            <p className="eyebrow reveal">Ognaj · New Science City Road</p>
            <h2 className="display reveal" style={dl('0.08s')}>Five minutes from Gota,<br /><em className="script">a world away from hurry</em></h2>
            <p className="lead reveal" style={dl('0.16s')}>S P Ring Road connectivity keeps drives short from Chandkheda, Motera, Vaishnodevi and central Ahmedabad — guests arrive fresh, and leave with full-camera batteries.</p>
            <div className="btn-row reveal" style={dl('0.24s')}>
              <Mag className="btn btn-gold" href="/contact">Get Directions <span className="arr">→</span></Mag>
              <Link className="btn btn-ghost" href="/packages">See Packages</Link>
            </div>
          </Rv>
        </div>
      </Band>

      <section className="section" id="policies">
        <div className="container">
          <Rv>
            <div className="split">
              <div className="split-copy">
                <p className="eyebrow reveal">House Policies <span className="dot">✿</span></p>
                <h2 className="h2 reveal" style={dl('0.08s')}>Clear terms, <em className="script">no surprises</em></h2>
                <p className="lead reveal" style={dl('0.16s')}>The written-in-stone policies of the house — ask us anything beyond these, and our team will confirm it on paper.</p>
                <div className="chip-row reveal" style={dl('0.2s')}>
                  <span className="chip">{CHECK} Outside Caterers Allowed</span>
                  <span className="chip">{CHECK} Hawan &amp; Baraat Welcome</span>
                  <span className="chip">{CHECK} Fireworks Permitted</span>
                  <span className="chip">{CHECK} UPI &amp; Card Payments</span>
                </div>
                <div className="btn-row reveal" style={dl('0.28s')}>
                  <Link className="btn btn-dark" href="/packages">Booking &amp; Pricing <span className="arr">→</span></Link>
                </div>
              </div>
              <div className="split-img reveal" data-reveal="right" style={{ background: 'none' }}>
                <table className="policy-table">
                  <tbody>
                    {POLICIES.map(([k, v]) => (
                      <tr key={k}><td>{k}</td><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Rv>
            <div className="cta-frame">
              <span className="script reveal">See it before you say yes…</span>
              <h2 className="display reveal" style={dl('0.08s')}>Walk the lawn today,<br /><em className="script">book it for tomorrow</em></h2>
              <div className="btn-row reveal" style={dl('0.2s')}>
                <Mag className="btn btn-gold" href="/contact">Request a Site Visit <span className="arr">→</span></Mag>
                <Link className="btn btn-ghost" href="/gallery">View the Gallery</Link>
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
