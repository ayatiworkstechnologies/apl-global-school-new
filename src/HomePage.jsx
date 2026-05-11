
import AdmissionsBanner from "./Home/AdmissionsBanner";
import GallerySection from "./Home/GallerySection";
import CambridgeDiplomaSection from "./Home/CambridgeDiplomaSection";
import ContentBanner from "./Home/ContentBanner";
import UpcommingEvents from "./Home/UpcomingEvent";
import BannerSection from "./Home/BannerSection";
import TestimonialCarousel from "./Home/TestimonialCarousel";
import ContactUs from "./Home/Contact";
import TabsSection from "./Home/TabsSection";
import ContactSection from "./Home/ContactSection";
import NewsEventsSection from "./Home/NewsEventsSection";

function HomePage() {
  return (
    <>
      <BannerSection />
      <TabsSection />
      <AdmissionsBanner />
      <ContentBanner />
      <UpcommingEvents />
      <NewsEventsSection />
      <GallerySection />
      <CambridgeDiplomaSection />
      <TestimonialCarousel />
      <ContactUs />
      <ContactSection />
    </>
  );
}

export default HomePage;
