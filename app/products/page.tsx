import ProductsCTA from "@/components/products/products-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse homemade snacks, ladoos, dhokla, ready-to-eat food items and speciality products prepared by Food Kashti.",
};

import ProductsHero from "@/components/products/products-hero";
import ProductsGrid from "@/components/products/products-grid";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}