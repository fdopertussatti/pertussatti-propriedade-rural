import Navbar from "@/app/components/Navbar";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import HeroSection from "@/app/sections/HeroSection";
import OverviewSection from "@/app/sections/OverviewSection";
import AreaSection from "@/app/sections/AreaSection";
import WaterResourcesSection from "@/app/sections/WaterResourcesSection";
import PoultrySection from "@/app/sections/PoultrySection";
import EnergySection from "@/app/sections/EnergySection";
import EquipmentSection from "@/app/sections/EquipmentSection";
import ResidenceSection from "@/app/sections/ResidenceSection";
import GallerySection from "@/app/sections/GallerySection";
import LocationSection from "@/app/sections/LocationSection";
import ContactSection from "@/app/sections/ContactSection";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />
      <main>
        <HeroSection />
        <OverviewSection />
        <AreaSection />
        <WaterResourcesSection />
        <PoultrySection />
        <EnergySection />
        <EquipmentSection />
        <ResidenceSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
