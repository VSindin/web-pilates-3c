import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ReviewsCarousel />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
