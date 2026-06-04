import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Food Kashti, our homemade food philosophy, catering services and commitment to delivering authentic food across Vadodara.",
};
import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import MissionValues from "@/components/about/mission-values";
import WhyTrustUs from "@/components/about/why-trust-us";
import AboutCTA from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <OurStory />

      <MissionValues />

      <WhyTrustUs />

      <AboutCTA />
      
    </>
  );
}