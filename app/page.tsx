import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProjectCarousel from "@/components/ProjectsCarousel";
import PromoBanner from "@/components/PromoBanner";
import LocationsCarousel from "@/components/LocationsCarousel";
import LoanBanner from "@/components/LoanBanner";
import CategoriesSection from "@/components/CategoriesSection";
import BHKSection from "@/components/BHKSection";
import TrendingLocalities from "@/components/TrendingLocalities";
import HowItWorks from "@/components/HowItWorks";
import DevelopersMarquee from "@/components/DevelopersMarquee";
import Footer from "@/components/Footer";
import PremiumHero from "@/components/PremiumHero";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition>
        <Navbar />
        <Hero />
        {/* <PremiumHero /> */}
        <Stats />
        <ProjectCarousel />
        <PromoBanner />
        <LocationsCarousel />
        <LoanBanner />
        <CategoriesSection />
        <BHKSection />
        <TrendingLocalities />
        <HowItWorks />
        <DevelopersMarquee />
        <Footer />
      </PageTransition>
    </>
  );
}
