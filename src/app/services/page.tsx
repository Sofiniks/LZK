import HeroSection from "../components/sections/HeroSection";
import ServicesCards from "../components/sections/services/ServicesCards";
import ServicesDataTables from "../components/sections/services/ServicesDataTables";
import ServicesList from "../components/sections/services/ServicesList";
import ServicesRequest from "../components/sections/services/ServiceRequest";

export default function ServicesPage() {
  return (
    <main>
      <HeroSection title="Services"/>
      <ServicesCards/>
      <ServicesDataTables/>
      <ServicesList/>
      <ServicesRequest/>
    </main>
  );
}
