import Hero from "@/components/home/hero";
import WhyChooseUs from "@/components/home/why-choose-us";
import ServicesPreview from "@/components/home/services-preview";
import ProductsPreview from "@/components/home/products-preview";
import GalleryPreview from "@/components/home/gallery-preview";
import CTASection from "@/components/home/cta-section";
import Testimonials from "@/components/shared/testimonials";
import TrustBadges from "@/components/shared/trust-badges";


export default function HomePage() {
  return (
    <>
      <Hero />

      <WhyChooseUs />

      <TrustBadges />

      <ServicesPreview />

      <ProductsPreview />

      <GalleryPreview />

      <Testimonials />

      <CTASection />
    </>
  );
}