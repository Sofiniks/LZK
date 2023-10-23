import HeroSection from './components/sections/HeroSection';
import MainInfoListSection from './components/sections/home/MainInfoListSection';
import LocationSection from './components/sections/home/LocationSection';
import ServicesSection from './components/sections/home/ServicesSection';
import Priorities from './components/sections/home/Priorities';

export default function Home() {
  return (
    <main>
      <HeroSection title="About Us" />
      <MainInfoListSection />
      <Priorities/>
      <ServicesSection />
      <LocationSection />
    </main>
  );
}
