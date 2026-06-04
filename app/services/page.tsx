import ServicesCTA from "@/components/services/services-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore catering services, tiffin solutions, breakfast delivery, Jain food arrangements and train food delivery offered by Food Kashti.",
};
import ServicesGrid from "@/components/services/services-grid";import WhyChooseUs from "@/components/services/why-choose-us";

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  );
}