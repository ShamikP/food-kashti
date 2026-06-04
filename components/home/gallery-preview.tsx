import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function GalleryPreview() {
  const images = [
    {
      src: "/images/event-catering-food-kashti.jpg",
      alt: "Event Catering Food",
    },
    {
      src: "/images/homemade-breakfast-delivery-vadodara.jpg",
      alt: "Breakfast Delivery",
    },
    {
      src: "/images/jain-food-catering-vadodara.jpg",
      alt: "Jain Food Catering",
    },
    {
      src: "/images/homemade-masala-snacks-vadodara.jpg",
      alt: "Homemade Snacks",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
            Gallery
          </p>

          <h2 className="heading-font text-5xl text-brand">
            A Glimpse Of Our Food Journey
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-5">
            Explore some of our recent food preparations, catering
            events and homemade specialties.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-3xl shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="h-[300px] w-full object-cover"
              />
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">

          <Link href="/gallery">
            <Button variant="brand" >
              View Full Gallery
            </Button>
          </Link>

        </div>

      </Container>
    </section>
  );
}