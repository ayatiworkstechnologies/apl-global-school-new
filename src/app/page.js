

import TabsSection from "@/pages/Home/TabsSection";
import AdmissionsBanner from "@/pages/Home/AdmissionsBanner";
import ContentBanner from "@/pages/Home/ContentBanner";
import UpcommingEvents from "@/pages/Home/UpcomingEvent";
import NewsEventsTabs from "@/pages/Home/NewsEventsSection";
import GallerySection from "@/pages/Home/GallerySection";
import CambridgeDiplomaSection from "@/pages/Home/CambridgeDiplomaSection";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";
import ContactUs from "@/pages/Home/Contact";
import ContactSection from "@/pages/Home/ContactSection";
import StaticBanner from "@/pages/Home/BannerSection";

function HomePage() {
  return (
    <>
      <StaticBanner />
      <TabsSection />
      <AdmissionsBanner />
      <ContentBanner />
      <UpcommingEvents />
      <NewsEventsTabs />
      <GallerySection />
      <CambridgeDiplomaSection />
      <TestimonialCarousel />
      <ContactUs />
      <ContactSection />
    </>
  );
}

export default HomePage;
