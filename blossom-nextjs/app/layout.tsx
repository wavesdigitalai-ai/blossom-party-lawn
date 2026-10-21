import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Pre from '@/components/Pre';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Flts from '@/components/Flts';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.blossompartylawn.in'),
  title: {
    default: 'Blossom Party Lawn — Premier Wedding & Party Lawn in Ognaj, Ahmedabad',
    template: '%s — Blossom Party Lawn, Ahmedabad',
  },
  description: "Blossom Party Lawn is Ahmedabad's lush open-air party lawn in Ognaj, near Gota on New Science City Road — hosting weddings, receptions, garba & sangeet nights, birthdays and corporate events for 250–600 guests. Mandap setups, outside catering, DJ, ample parking. Enquire: +91 84608 20640.",
  keywords: ['Blossom Party Lawn', 'party lawn Ahmedabad', 'marriage lawn Ognaj', 'wedding venue New Science City Road', 'reception garden Ahmedabad', 'garba party plot', 'banquet lawn Gota', 'party plot Ognaj', 'wedding garden Ahmedabad 380060'],
  authors: [{ name: 'Blossom Party Lawn' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Blossom Party Lawn',
    title: 'Blossom Party Lawn — Premier Wedding & Party Lawn in Ognaj, Ahmedabad',
    description: 'Lush open-air celebrations for 250–600 guests. Weddings, receptions, garba nights & corporate events on New Science City Road, Ognaj, Ahmedabad.',
    images: ['/images/venue-4.png'],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Party Lawn — Premier Wedding & Party Lawn in Ahmedabad',
    description: 'Where every celebration blooms — open-air weddings, receptions, garba nights and more in Ognaj, Ahmedabad.',
    images: ['/images/venue-4.png'],
  },
  icons: '/favicon.svg',
};

export const viewport: Viewport = {
  themeColor: '#142e27',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <Pre />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Flts />
      </body>
    </html>
  );
}
