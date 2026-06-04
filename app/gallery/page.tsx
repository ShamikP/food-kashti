import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look at our homemade food, catering arrangements, Jain food preparations and customer favourites from Food Kashti.",
};
import GalleryHero from "@/components/gallery/gallery-hero";
import GalleryGrid from "@/components/gallery/gallery-grid";

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}