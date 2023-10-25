import HeroSection from './components/sections/HeroSection';
import MainInfoListSection from './components/sections/home/MainInfoListSection';
import LocationSection from './components/sections/home/LocationSection';
import Navigation from './components/sections/home/Navigation';
import Priorities from './components/sections/home/Priorities/PrioritiesDesktop';

export default function Home() {
  return (
    <main>
      <HeroSection title="About Us" />
      <MainInfoListSection />
      <Priorities />
      <Navigation />
      <LocationSection />
    </main>
  );
}
