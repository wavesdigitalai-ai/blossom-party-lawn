'use client';

import { useEffect, useState } from 'react';

const WA = 'https://wa.me/918470804805?text=Hi%20Blossom%20Party%20Lawn%2C%20I%27d%20like%20to%20check%20an%20event%20date.';

export default function Flts() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const s = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', s, { passive: true });
    s();
    return () => window.removeEventListener('scroll', s);
  }, []);

  return (
    <div className="floaters">
      <a className="wa-btn" href={WA} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.2-.3 0-.4.1-.6l.5-.6a.6.6 0 0 0 .1-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2A5.1 5.1 0 0 0 8.1 13a11 11 0 0 0 4.2 3.7 8.9 8.9 0 0 0 2.9.9 2.9 2.9 0 0 0 2-.7 2.6 2.6 0 0 0 .9-1.9c0-.2-.2-.4-.5-.5z" /></svg>
      </a>
      <button className={'top-btn' + (show ? ' show' : '')} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 19V6m-6 6 6-6 6 6" /></svg>
      </button>
    </div>
  );
}
