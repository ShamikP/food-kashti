import LocationMap from "@/components/contact/location-map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Food Kashti for catering orders, tiffin services, train food delivery and homemade food requirements in Vadodara.",
};

import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <LocationMap />
    </>
  );
}