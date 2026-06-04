import Container from "@/components/shared/container";
import Image from "next/image";

const galleryImages = [
  "/images/bulk-food-catering-orders-vadodara.jpg",
  "/images/event-catering-food-kashti.jpg",
  "/images/fresh-homemade-dhokla-vadodara.jpg",
  "/images/homemade-besan-ladoo-vadodara.jpg",
  "/images/homemade-breakfast-delivery-vadodara.jpg",
  "/images/homemade-masala-snacks-vadodara.jpg",
  "/images/jain-food-catering-vadodara.jpg",
  "/images/party-food-catering-vadodara.jpg",
  "/images/premium-dry-fruit-ladoo-vadodara.jpg",
];

export default function GalleryGrid() {
  return (
    <section className="pb-24">
      <Container>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
            >
              <div className="relative h-80">
                <Image
                  src={image}
                  alt={`Food Kashti Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}