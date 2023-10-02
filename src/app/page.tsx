import HeroSection from "./components/sections/HeroSection";
import MainInfoListSection from "./components/sections/home/MainInfoListSection";
import LocationSection from "./components/sections/home/LocationSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MainInfoListSection/>
      <LocationSection/>
    </main>
  )
}
