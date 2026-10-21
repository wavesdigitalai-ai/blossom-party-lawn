import type { Metadata } from 'next';
import Link from 'next/link';
import Ph from '@/components/Ph';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Band from '@/components/Band';
import Mag from '@/components/Mag';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'Occasions — Weddings, Garba Nights, Birthdays & More | Blossom Party Lawn Ahmedabad' },
  description: 'Every occasion finds its shape at Blossom Party Lawn, Ognaj Ahmedabad: wedding mandaps, receptions, garba & sangeet nights, haldi mornings, birthdays, baby showers, kitty parties and corporate meets for 250–600 guests.',
  keywords: ['wedding lawn Ahmedabad', 'garba venue Ognaj', 'sangeet lawn Gota', 'reception venue New Science City Road', 'birthday party lawn Ahmedabad', 'corporate party lawn Ahmedabad'],
  alternates: { canonical: '/occasions' },
  openGraph: { title: 'Occasions at Blossom Party Lawn, Ahmedabad', description: 'Mandap mornings, LED-lit reception nights and nine-day garba marathons — occasions staged to perfection.', images: ['/images/occ-mandap-2.jpg'] },
};

const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blossompartylawn.in/' },
    { '@type': 'ListItem', position: 2, name: 'Occasions', item: 'https://www.blossompartylawn.in/occasions' },
  ],
};

const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 13l4 4 10-10" /></svg>;

const SVC: { id: string; ic: React.ReactNode; h4: string; p: string; cta: string }[] = [
  { id: 'weddings', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20h16M5 20V9h14v11M9 20V12m6 8v-8M3 9l9-5 9 5" strokeLinejoin="round" /></svg>, h4: 'Weddings Vivaah', p: 'Baraat through the paved entry, hawan in a floral mandap, seven vows under open sky.', cta: 'Reserve the Date' },
  { id: 'receptions', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3h8l3 6H5l3-6zM5 9v11m14-11v11M3 20h18" /></svg>, h4: 'Wedding Receptions', p: 'Golden stage, LED wall and buffet counters that turn evening meets into galas.', cta: 'Plan a Reception' },
  { id: 'garba', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="7" r="2.6" /><circle cx="16.5" cy="9.5" r="2.2" /><path d="M6.5 21l2.4-7.2a2 2 0 0 1 1.3-1.3l3.6-1.1 3 5.6M10.5 13.5 12 20" strokeLinecap="round" /></svg>, h4: 'Garba & Sangeet Nights', p: 'Circles clash, dhols thunder — nine-metre dance arena under the navratri moon.', cta: 'Book Navratri Dates' },
  { id: 'prewedding', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.3" /></svg>, h4: 'Haldi, Mehndi & Ring', p: 'Sunlit turmeric mornings; marigold afternoons for mehndi artists & engagement rings.', cta: 'Start the Traditions' },
  { id: 'birthdays', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v8m-4.5-8v6m9-6v6M4 12h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" strokeLinecap="round" /></svg>, h4: "Birthdays & Kids' Parties", p: 'Theme tables, balloon arches, open grass to run wild — first birthdays to sixtieths.', cta: 'Set the Theme' },
  { id: 'showers', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4h6v5a3 3 0 0 1-6 0V4zM12 12v4m-4 5h8v-3a4 4 0 0 0-8 0v3z" strokeLinecap="round" /></svg>, h4: 'Baby Showers & Naming', p: 'Gentle pastels, seat-granny comfort and space for blessing rituals with the family.', cta: 'Bless the Little One' },
  { id: 'kitty', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7.5" cy="8" r="2.4" /><circle cx="16.5" cy="8" r="2.4" /><path d="M4.5 20v-4a3 3 0 0 1 3-3m12 7v-4a3 3 0 0 0-3-3M10.5 20v-5h3v5" strokeLinecap="round" /></svg>, h4: 'Kitty & Family Get-Togethers', p: 'Lawn-side sofa lounges, board games at golden hour, chai through till sunset.', cta: 'Gather the Gang' },
  { id: 'corporate', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3.5" y="4" width="17" height="12" rx="1.5" /><path d="M9 20h6m-3-4v4M7 9h5M7 12h3.5" strokeLinecap="round" /></svg>, h4: 'Corporate & Dealer Meets', p: 'Registration plaza, production-grade stage, soundcheck discipline and brand backdrops.', cta: 'Run the Brief' },
  { id: 'others', ic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 11a8 8 0 1 0-16 0v6a3 3 0 0 0 3 3h1v-7H4v-2m16 2h-3v7h1a2 2 0 0 0 2-2v-7z" strokeLinecap="round" /></svg>, h4: 'Anniversaries & Reunions', p: 'Jubilee cakes, alumni rows and photo-walk corners where old stories find new light.', cta: 'Relive the Year' },
];

const SEAT: [string, string][] = [
  ['Floating Guests', 'Up to 600'],
  ['Round Table Dining', '350–400'],
  ['Theatre Seating', '450–550'],
  ['Lounge-Style Meets', '150–250'],
];

const WINDOW: [string, string][] = [
  ['Morning Functions', '10:00 AM – 1:00 PM'],
  ['Afternoon Functions', '1:00 PM – 5:00 PM'],
  ['Evening Functions', '5:00 PM – 10:00 PM'],
  ['Full-Day Booking', '10:00 AM – 10:00 PM'],
];

export default function Occasions() {
  return (
    <>
      <Ld data={crumbLd} />

      <Ph
        img="/images/occ-mandap-2.jpg"
        crumb="Occasions"
        title={<h1 className="display">One Lawn, <em className="script">Infinite Moments</em></h1>}
        sub="Vows at noon, dhol at dusk, stage lights at ten sharp — the grounds reshaped for every occasion on the calendar."
      />

      <section className="section" id="all">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">The Occasion Series <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Choose your <em className="script">reason</em></h2>
            </div>
            <div className="svc-list stagger reveal">
              {SVC.map((s) => (
                <div className="svc" id={s.id} key={s.id}>{s.ic}<h4>{s.h4}</h4><p>{s.p}</p><Link className="more" href="/contact">{s.cta} →</Link></div>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      <section className="section section--paper" id="signature-formats">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Signature Formats <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Three evenings we&apos;ve <em className="script">perfected</em></h2>
            </div>

            <div className="split" style={{ marginBottom: 'clamp(60px,8vw,110px)' }}>
              <div className="split-img reveal" data-reveal="left">
                <img src="/images/occ-mandap-1.jpg" alt="Floral wedding mandap ready for pheras" loading="lazy" />
                <span className="tag">vivaah · baraat · hawan</span>
              </div>
              <div className="split-copy">
                <span className="script reveal">The Wedding Day</span>
                <h3 className="h3 reveal" style={dl('0.06s')}>Weddings, exactly as the family imagines them</h3>
                <p className="lead reveal" style={dl('0.12s')}>The baraat arrives through the grand paved plaza to dhol beats; the mandap rises centre-lawn with hawan pre-approved. Pheras often wrap by dusk — just in time for the golden reception stage on the other side.</p>
                <div className="chip-row reveal" style={dl('0.18s')}>
                  <span className="chip">{CHECK} Baraat Welcome</span>
                  <span className="chip">{CHECK} Hawan-Approved Mandap</span>
                  <span className="chip">{CHECK} Outside Caterers</span>
                  <span className="chip">{CHECK} Ample Parking</span>
                </div>
                <div className="btn-row reveal" style={dl('0.24s')}><Link className="btn btn-dark" href="/contact">Discuss Vows &amp; Dates <span className="arr">→</span></Link></div>
              </div>
            </div>

            <div className="split rev">
              <div className="split-img reveal" data-reveal="right">
                <img src="/images/venue-6.png" alt="Golden reception stage with companion seating rows at night" loading="lazy" />
                <span className="tag">reception · stage · led wall</span>
              </div>
              <div className="split-copy">
                <span className="script reveal">Reception Nights</span>
                <h3 className="h3 reveal" style={dl('0.06s')}>The golden hour, extended till ten</h3>
                <p className="lead reveal" style={dl('0.12s')}>Rows of gold-caped chairs, a flower-dressed stage backdrop, confetti at the perfect cue and dinner that never stops walking past — the reception formula Ahmedabad raves about.</p>
                <div className="divider-facts">
                  <div className="fact reveal" style={dl('0.18s')}><b>Stage + LED</b><span>Production Support</span></div>
                  <div className="fact reveal" style={dl('0.24s')}><b>10 PM</b><span>Departure Window</span></div>
                  <div className="fact reveal" style={dl('0.3s')}><b>Live Counters</b><span>Timed Buffet Duty</span></div>
                  <div className="fact reveal" style={dl('0.36s')}><b>300 Photos</b><span>Golden-frame Corners</span></div>
                </div>
                <div className="btn-row reveal" style={dl('0.42s')}><Link className="btn btn-dark" href="/contact">Plan the Gala <span className="arr">→</span></Link></div>
              </div>
            </div>

            <div className="split" style={{ marginTop: 'clamp(60px,8vw,110px)' }}>
              <div className="split-img reveal" data-reveal="left">
                <img src="/images/occ-garba-3.jpg" alt="Garba folk dance of Gujarat in full swing" loading="lazy" />
                <span className="tag">dhol · circles · navratri</span>
              </div>
              <div className="split-copy">
                <span className="script reveal">Garba Mela Nights</span>
                <h3 className="h3 reveal" style={dl('0.06s')}>Nine nights of Gujarat&apos;s heartbeat</h3>
                <p className="lead reveal" style={dl('0.12s')}>The lawn becomes a dance arena — chaniya-choli spirals, LED-lit stage, DJ-system thump and fireworks-permitted finales for the last night. Safe guest-flow lanes keep dancers dancing.</p>
                <div className="chip-row reveal" style={dl('0.18s')}>
                  <span className="chip">{CHECK} DJ Available</span>
                  <span className="chip">{CHECK} Power Backup</span>
                  <span className="chip">{CHECK} Fireworks Allowed</span>
                </div>
                <div className="btn-row reveal" style={dl('0.24s')}><Link className="btn btn-dark" href="/contact">Hold Navratri Dates <span className="arr">→</span></Link></div>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <Band img="/images/occ-garba-1.jpg" speed={0.28}>
        <div className="container">
          <Rv>
            <p className="eyebrow reveal">Festival Season Alert</p>
            <h2 className="display reveal" style={dl('0.08s')}>Navratri &amp; wedding season<br /><em className="script">dates go first</em></h2>
            <p className="lead reveal" style={dl('0.16s')}>October to February weekends are the first to fill at Ognaj. Provisional holds are free for up to 7 days — start today.</p>
            <div className="btn-row reveal" style={dl('0.24s')}>
              <Mag className="btn btn-gold" href="/contact">Hold My Date <span className="arr">→</span></Mag>
            </div>
          </Rv>
        </div>
      </Band>

      <section className="section" id="fit-table">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Venue Fit Guide <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>What the lawn hosts, <em className="script">in numbers</em></h2>
            </div>
            <div className="grid-2 stagger reveal">
              <div className="value-card">
                <h4>Seating Capacities</h4>
                <table className="policy-table" style={{ marginTop: 6 }}>
                  <tbody>
                    {SEAT.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <div className="value-card">
                <h4>Occasion Windows</h4>
                <table className="policy-table" style={{ marginTop: 6 }}>
                  <tbody>
                    {WINDOW.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
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
              <span className="script reveal">Feeling the fit?</span>
              <h2 className="display reveal" style={dl('0.08s')}>Tell us the occasion,<br /><em className="script">we&apos;ll shape the lawn</em></h2>
              <div className="btn-row reveal" style={dl('0.2s')}>
                <Mag className="btn btn-gold" href="/contact">Share Your Plan <span className="arr">→</span></Mag>
                <Link className="btn btn-ghost" href="/packages">Compare Packages</Link>
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
