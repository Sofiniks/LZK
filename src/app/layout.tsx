import './globals.css';
import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import PageLayout from './components/layouts/PageLayout';
import StyledComponentsRegistry from '@/lib/registry';

const merriweather_sans = Merriweather_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-merriweather_sans',
});

export const metadata: Metadata = {
  title: {
    default: 'LZK',
    template: '%s | LZK',
  },
  description:
    'Liepaja Northern Shipyard: Honoring a rich heritage in maritime excellence. Your trusted partner for quality ship repairs and conversions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather_sans.className}>
        <StyledComponentsRegistry>
          <PageLayout>
            <Header />
            {children}
            <Footer />
          </PageLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
