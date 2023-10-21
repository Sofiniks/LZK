import type { Metadata } from 'next';
import HeroSection from '../components/sections/HeroSection';
import ContactUs from '../components/sections/contactUs/ContactUsSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'LZK',
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection title="Contact Us" />
      <ContactUs />
    </main>
  );
}
