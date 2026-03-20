import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ServicesBento from "@/components/ServicesBento";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TrustBadges from "@/components/TrustBadges";
import LeadMagnets from "@/components/LeadMagnets";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitPopup from "@/components/ExitPopup";
import StickyBar from "@/components/StickyBar";
import CursorGlow from "@/components/CursorGlow";
import MobileWhatsAppBar from "@/components/MobileWhatsAppBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyBar />
      <main>
        <Hero />
        <StatsCounter />
        <ServicesBento />
        <HowItWorks />
        <TestimonialsCarousel />
        <TrustBadges />
        <LeadMagnets />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileWhatsAppBar />
      <ExitPopup />
      <CursorGlow />
    </>
  );
}
