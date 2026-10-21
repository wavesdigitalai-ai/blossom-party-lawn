import type { Metadata } from 'next';
import Ph from '@/components/Ph';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Faqs from '@/components/Faqs';
import Form from '@/components/Form';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'Contact & Booking — Blossom Party Lawn, Ognaj Ahmedabad | Call +91 84608 20640' },
  description: 'Book Blossom Party Lawn, Ahmedabad: call or WhatsApp +91 84608 20640, or send the online enquiry. Address — New Science City Road, Vasantnagar Township, Ognaj, Ahmedabad, Gujarat 380060. Site visits daily, events 10 AM–10 PM.',
  keywords: ['Blossom Party Lawn contact', 'party lawn booking Ahmedabad', 'wedding venue contact Ognaj', 'banquet lawn phone number Gota', 'book marriage garden Ahmedabad 380060'],
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact & Booking — Blossom Party Lawn, Ahmedabad', description: 'Calls fastest, WhatsApp works wonders — the booking desk replies all days, 10 AM–10 PM.', images: ['/images/venue-1.png'] },
};

const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blossompartylawn.in/' },
    { '@type': 'ListItem', position: 2, name: 'Contact & Booking', item: 'https://www.blossompartylawn.in/contact' },
  ],
};

const venueLd = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Blossom Party Lawn',
  description: 'Lush open-air party lawn in Ognaj, Ahmedabad — weddings, receptions, garba nights, birthdays and corporate events for 250-600 guests.',
  url: 'https://www.blossompartylawn.in/contact',
  telephone: '+91-8470804805',
  contactPoint: { '@type': 'ContactPoint', contactType: 'reservations', telephone: '+91-8470804805', areaServed: 'IN', availableLanguage: ['en', 'gu', 'hi'] },
  address: { '@type': 'PostalAddress', streetAddress: 'New Science City Road, Vasantnagar Township, Ognaj', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', postalCode: '380060', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 23.1181, longitude: 72.5438 },
  openingHours: 'Mo-Su 10:00-22:00',
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Blossom%20Party%20Lawn%20Ognaj%20Ahmedabad',
  priceRange: '₹₹',
};

export default function Contact() {
  return (
    <>
      <Ld data={crumbLd} />
      <Ld data={venueLd} />

      <Ph
        img="/images/venue-1.png"
        crumb="Contact & Booking"
        title={<h1 className="display">Say It, <em className="script">and It&apos;s Held</em></h1>}
        sub="Calls are fastest; WhatsApp works wonders; the form below sends your enquiry straight to the booking desk."
      />

      <div className="container"><Rv><div className="hours-bar reveal"><span className="dotv">●</span> Booking Desk Replies All Days &nbsp;·&nbsp; Site Visits by Appointment &nbsp;·&nbsp; +91 84608 20640</div></Rv></div>

      <section className="section" id="book">
        <div className="container">
          <Rv>
            <div className="contact-grid">
              <div className="info-cards stagger reveal">
                <div className="info-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.3" /></svg></span>
                  <div><b>Venue Address</b><p>New Science City Road, Vasantnagar Township, Vasant Nagar, Ognaj, Ahmedabad, Gujarat 380060<br /><small>Near Gota · Off S P Ring Road</small></p></div>
                </div>
                <div className="info-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 4h4l1.7 4.2-2.2 1.7a12 12 0 0 0 5.6 5.6l1.7-2.2L20 15v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4z" /></svg></span>
                  <div><b>Call the Booking Desk</b><p><a href="tel:+918470820640">+91 84608 20640</a><br /><small>Fastest for date checks &amp; site-visit slots</small></p></div>
                </div>
                <div className="info-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.2-.3 0-.4.1-.6l.5-.6a.6.6 0 0 0 .1-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2A5.1 5.1 0 0 0 8.1 13a11 11 0 0 0 4.2 3.7 8.9 8.9 0 0 0 2.9.9 2.9 2.9 0 0 0 2-.7 2.6 2.6 0 0 0 .9-1.9c0-.2-.2-.4-.5-.5z" /></svg></span>
                  <div><b>WhatsApp Enquiries</b><p><a href="https://wa.me/918470820640?text=Hi%20Blossom%20Party%20Lawn%2C%20I%27d%20like%20to%20check%20an%20event%20date." target="_blank" rel="noopener">Chat instantly on WhatsApp</a><br /><small>Package menus voiced as voice notes</small></p></div>
                </div>
                <div className="info-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg></span>
                  <div><b>Event Hours</b><p>Celebrations daily — 10:00 AM to 10:00 PM<br /><small>Haldi mornings to reception evenings</small></p></div>
                </div>
                <div className="info-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4.5 4V5.5z" strokeLinejoin="round" /><path d="M8 9h8m-8 3.5h5" strokeLinecap="round" /></svg></span>
                  <div><b>Guards &amp; Payments</b><p>Cash · UPI · Paytm · G-Pay · PhonePe · Net Banking<br /><small>Receipted checkpoints along the timeline</small></p></div>
                </div>
              </div>

              <div className="form-card reveal" data-reveal="right">
                <p className="eyebrow" style={{ color: 'var(--gold)' }}>Enquiry Form <span className="dot" style={{ color: 'var(--rose)' }}>✿</span></p>
                <h2 className="h3" style={{ marginTop: 14 }}>Reserve, or simply <em className="script">ask away</em></h2>
                <Form />
              </div>
            </div>
          </Rv>
        </div>
      </section>

      <section className="section section--paper section-tight" id="map">
        <div className="container">
          <Rv>
            <div className="section-head center">
              <p className="eyebrow reveal">Find Us <span className="dot">✿</span></p>
              <h2 className="h2 reveal" style={dl('0.08s')}>Ognaj — five <em className="script">green minutes</em> from Gota</h2>
            </div>
            <div className="map-round reveal">
              <iframe title="Map to Blossom Party Lawn, Ognaj, Ahmedabad" src="https://www.google.com/maps?q=Blossom%20Party%20Lawn%2C%20New%20Science%20City%20Road%2C%20Ognaj%2C%20Ahmedabad%2C%20Gujarat%20380060&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="chip-row">
              <a className="chip" href="https://www.google.com/maps/search/?api=1&query=Blossom%20Party%20Lawn%20Ognaj%20Ahmedabad" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 21l7-2 5 2V3h-8v6m3 8H4v-6" /></svg> Open in Google Maps
              </a>
              <a className="chip" href="https://wa.me/918470820640?text=Please%20share%20the%20venue%20map%20pin." target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z" /></svg> Get Pin on WhatsApp
              </a>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.3" /></svg> Vasant Nagar, Ognaj 380060
              </span>
            </div>
          </Rv>
        </div>
      </section>

      <section className="section" id="visit-faq">
        <div className="container">
          <Rv>
            <Faqs
              head={
                <div className="section-head center">
                  <p className="eyebrow reveal">Before You Call <span className="dot">✿</span></p>
                  <h2 className="h2 reveal" style={dl('0.08s')}>First-time <em className="script">enquiries</em>, answered</h2>
                </div>
              }
              items={[
                { q: 'How quickly will the desk respond?', a: 'Within business hours, all days of the week. Wedding-season crowds mean WhatsApp sometimes beats the call queue — both are watched.' },
                { q: 'Can we visit on the same day as the enquiry?', a: 'Often yes — the grounds host events from 10 AM to 10 PM, so walkthroughs are slotted between set-ups. Fix your slot by call or WhatsApp.' },
                { q: 'What details help process the enquiry faster?', a: 'Event dates (plus a fallback), guest count, occasion type and rituals planned — hawan, baraat, garba, fireworks. The form covers all of it.' },
                { q: 'Is outside food or décor allowed for rituals?', a: 'Outside caterers are welcome, décor is customisable, and hawan, baraat and firecracker-support are all permitted within the stated policies.' },
              ]}
            />
          </Rv>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Rv>
            <div className="cta-frame">
              <span className="script reveal">The lawn is ready…</span>
              <h2 className="display reveal" style={dl('0.08s')}>All that&apos;s missing<br /><em className="script">is your date</em></h2>
              <div className="btn-row reveal" style={dl('0.2s')}>
                <a className="btn btn-gold" href="tel:+918470820640">Call +91 84608 20640</a>
                <a className="btn btn-ghost" href="https://wa.me/918470820640">WhatsApp the Desk</a>
              </div>
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
