import Image from "next/image";
import Container from "@/components/shared/container";

const services = [
  {
    title: "Bulk Catering Orders",
    image: "/images/bulk-food-catering-orders-vadodara.jpg",
    description:
      "Fresh homemade catering for offices, schools, family functions and corporate events.",
  },
  {
    title: "Breakfast Delivery",
    image: "/images/homemade-breakfast-delivery-vadodara.jpg",
    description:
      "Healthy homemade breakfast delivered fresh every morning.",
  },
  {
    title: "Jain Food Catering",
    image: "/images/jain-food-catering-vadodara.jpg",
    description:
      "Pure vegetarian Jain food prepared with authentic taste and care.",
  },
  {
    title: "Homemade Snacks",
    image: "/images/homemade-masala-snacks-vadodara.jpg",
    description:
      "Traditional homemade snacks prepared using quality ingredients.",
  },
  {
    title: "Tiffin Service",
    image: "/images/event-catering-food-kashti.jpg",
    description:
      "Daily homemade meals for working professionals and families.",
  },
  {
    title: "Train Food Delivery",
    image: "/images/fresh-homemade-dhokla-vadodara.jpg",
    description:
      "Fresh homemade food packed carefully for train journeys.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="text-center max-w-4xl mx-auto">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Our Food Solutions
          </p>

          <h2 className="heading-font text-5xl text-brand">
            Services Designed Around Your Needs
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-5">
            Whether you need meals for your family, office,
            event or travel plans, Food Kashti offers fresh
            homemade food prepared with care.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="heading-font text-3xl text-brand">
                  {service.title}
                </h3>

                <p className="body-font text-muted-foreground mt-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}