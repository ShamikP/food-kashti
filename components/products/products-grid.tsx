import Container from "@/components/shared/container";
import Image from "next/image";

const products = [
  {
    title: "Besan Ladoo",
    description:
      "Traditional homemade besan ladoos made with pure ingredients and authentic taste.",
    image: "/images/homemade-besan-ladoo-vadodara.jpg",
  },
  {
    title: "Premium Dry Fruit Ladoo",
    description:
      "Nutritious dry fruit ladoos prepared using premium quality ingredients.",
    image: "/images/premium-dry-fruit-ladoo-vadodara.jpg",
  },
  {
    title: "Fresh Dhokla",
    description:
      "Soft, fresh and delicious homemade dhokla prepared daily.",
    image: "/images/fresh-homemade-dhokla-vadodara.jpg",
  },
  {
    title: "Homemade Snacks",
    description:
      "Traditional homemade snacks prepared using quality ingredients.",
    image: "/images/homemade-masala-snacks-vadodara.jpg",
  },
  {
    title: "Event Catering",
    description:
      "Fresh homemade food arrangements for family functions and special occasions.",
    image: "/images/event-catering-food-kashti.jpg",
  },
  {
    title: "Jain Food",
    description:
      "Pure vegetarian Jain food prepared with authentic taste and care.",
    image: "/images/jain-food-catering-vadodara.jpg",
  },
];

export default function ProductsGrid() {
  return (
    <section className="pb-24">
      <Container>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="heading-font text-2xl text-brand mb-3">
                  {product.title}
                </h3>

                <p className="body-font text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}