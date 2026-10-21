'use client';

import { useEffect, useState, type ReactNode } from 'react';

const TS: { q: ReactNode; stars: string; starLabel: string; av: string; name: string; role: string }[] = [
  {
    q: <>&quot;It was a nice evening — we enjoyed a lot. The starters were amazing, and the <em>ambience &amp; decoration</em> were beautiful. Overall, the evening was splendid!!&quot;</>,
    stars: '★★★★★',
    starLabel: '5 star rating',
    av: '/images/occ-couple-1.jpg',
    name: 'Rushabh & Kinjal',
    role: 'Wedding Evening · Guests of the Family',
  },
  {
    q: <>&quot;We booked the lawn for our sangeet — the stage, the lights, the DJ sequencing — everything felt <em>larger than the evening</em> yet completely effortless.&quot;</>,
    stars: '★★★★★',
    starLabel: '5 star rating',
    av: '/images/occ-garba-1.jpg',
    name: 'Meera Desai',
    role: 'Sangeet Night · Host',
  },
  {
    q: <>&quot;Our dealer meet needed space and soberness — got both. Neatly kept lawns, <em>smooth vendor coordination</em> and guests who actually stayed till the last dish.&quot;</>,
    stars: '★★★★☆',
    starLabel: '4 and a half star rating',
    av: '/images/venue-2.png',
    name: 'Nikhil Trivedi',
    role: 'Corporate Annual Meet · Organiser',
  },
];

export default function Tst() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % TS.length), 7000);
    return () => window.clearInterval(t);
  }, [i]);

  return (
    <div id="tst">
      {TS.map((s, ix) => (
        <div key={ix} className={'tst' + (ix === i ? ' active' : '')}>
          <svg className="tst-mark" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
            <path d="M10 26h8l-4 12h-6a16 16 0 0 1 2-12zM28 26h8l-4 12h-6a16 16 0 0 1 2-12z" opacity=".9" />
            <path d="M18 24a10 10 0 0 1 8-10m10 12a10 10 0 0 1 8-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".45" />
          </svg>
          <blockquote>{s.q}</blockquote>
          <div className="tst-stars" aria-label={s.starLabel}>{s.stars}</div>
          <div className="tst-meta"><span className="av"><img src={s.av} alt="" loading="lazy" /></span><div><h5>{s.name}</h5><span>{s.role}</span></div></div>
        </div>
      ))}
      <div className="tst-dots">
        {TS.map((_, ix) => (
          <button key={ix} className={'tst-dot' + (ix === i ? ' active' : '')} onClick={() => setI(ix)} aria-label={'Testimonial ' + (ix + 1)} />
        ))}
      </div>
    </div>
  );
}
