import type { Metadata } from 'next';
import Ph from '@/components/Ph';
import { Rv } from '@/components/Rv';
import { dl } from '@/components/util';
import Band from '@/components/Band';
import Mag from '@/components/Mag';
import Gal from '@/components/Gal';
import { Ld } from '@/components/Ld';

export const metadata: Metadata = {
  title: { absolute: 'Gallery — Blossom Party Lawn Ahmedabad Frames | Lawns, Evenings, Décor' },
  description: 'Photo gallery of Blossom Party Lawn, Ognaj Ahmedabad — manicured lawns, golden reception stages, LED-lit arena nights, garba circles, mandap décor and Ahmedabad riverfront frames.',
  keywords: ['Blossom Party Lawn photos', 'wedding lawn gallery Ahmedabad', 'party lawn images Ognaj', 'marriage garden photos Gota'],
  alternates: { canonical: '/gallery' },
  openGraph: { title: 'Gallery — Blossom Party Lawn, Ahmedabad', description: 'Real grounds, real glow-ups — from sunlit buffet courts to LED-lit main-arena nights.', images: ['/images/venue-3.png'] },
};

const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blossompartylawn.in/' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://www.blossompartylawn.in/gallery' },
  ],
};

const ITEMS = [
  { src: '/images/venue-4.png', cat: 'lawns', cap: 'Lawn & Live Counters', alt: 'Bright lawn with decorated buffet counters and palm trees', cls: 'wide' },
  { src: '/images/occ-mandap-1.jpg', cat: 'decor occasions', cap: 'The Wedding Mandap', alt: 'Traditional floral wedding mandap', cls: 'tall' },
  { src: '/images/venue-1.png', cat: 'lawns', cap: 'Grand Entry Plaza', alt: 'Grand paved arrival plaza with welcome arch' },
  { src: '/images/venue-2.png', cat: 'evenings lawns', cap: 'Stage & LED Wall', alt: 'LED stage wall with pink lighting on lawn at night', cls: 'tall' },
  { src: '/images/venue-3.png', cat: 'evenings decor', cap: 'Evening Arrival Canopy', alt: 'Draped evening arrival canopy in teal and magenta' },
  { src: '/images/venue-6.png', cat: 'evenings decor', cap: 'Reception Nights', alt: 'Golden floral reception stage with rows of chairs', cls: 'tall' },
  { src: '/images/occ-garba-1.jpg', cat: 'occasions', cap: 'Garba Circles', alt: 'Garba couple mid-dance at ceremony' },
  { src: '/images/occ-mandap-2.jpg', cat: 'decor', cap: 'Mandap Décor', alt: 'Mandap decoration detail with florals' },
  { src: '/images/venue-5.png', cat: 'lawns', cap: 'Palm Parking Court', alt: 'Paved palm-lined parking court' },
  { src: '/images/occ-garba-2.jpg', cat: 'occasions', cap: "Dancers' Delight", alt: 'Garba dancers in joy at night', cls: 'tall' },
  { src: '/images/occ-haldi-1.jpg', cat: 'occasions decor', cap: 'Haldi Mornings', alt: 'Haldi ceremony celebration' },
  { src: '/images/atmos-lamps-1.jpg', cat: 'evenings decor', cap: 'Diyas & Dusk', alt: 'Rows of glowing diyas at dusk' },
  { src: '/images/occ-couple-1.jpg', cat: 'occasions', cap: 'Forever Portraits', alt: 'Newlywed couple portrait' },
  { src: '/images/city-ahm-1.jpg', cat: 'city', cap: 'Ahmedabad Around', alt: 'Sabarmati Riverfront in Ahmedabad' },
  { src: '/images/brand-blossom-2.jpg', cat: 'city', cap: 'Bloom Season', alt: 'Spring blossom in full bloom' },
];

export default function Gallery() {
  return (
    <>
      <Ld data={crumbLd} />

      <Ph
        img="/images/venue-3.png"
        crumb="Gallery"
        title={<h1 className="display">Frames From <em className="script">the Lawns</em></h1>}
        sub="Real grounds, real glow-ups — from sunlit buffet courts to LED-lit main-arena nights."
      />

      <section className="section" id="grid">
        <div className="container">
          <Rv>
            <Gal
              items={ITEMS}
              filters={[
                ['all', 'All Frames'],
                ['lawns', 'The Lawns'],
                ['evenings', 'Evening Glow'],
                ['decor', 'Décor & Rituals'],
                ['occasions', 'Occasions'],
                ['city', 'Ahmedabad Around'],
              ]}
            />
            <p className="photos-note">Venue frames captured on the Blossom grounds; occasion frames are representative festival shots. Ask for the complete event-day walkthrough album on your site visit.</p>
          </Rv>
        </div>
      </section>

      <Band img="/images/atmos-lamps-1.jpg" speed={0.26}>
        <div className="container">
          <Rv>
            <p className="eyebrow reveal">Your Frame Here</p>
            <h2 className="display reveal" style={dl('0.08s')}>Next time, <em className="script">it&apos;s your evening up there</em></h2>
            <div className="btn-row reveal" style={dl('0.18s')}>
              <Mag className="btn btn-gold" href="/contact">Claim the Date <span className="arr">→</span></Mag>
            </div>
          </Rv>
        </div>
      </Band>
    </>
  );
}
