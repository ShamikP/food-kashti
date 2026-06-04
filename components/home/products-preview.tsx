import Container from "@/components/shared/container";
import SectionHeading from "@/components/shared/section-heading";
import ProductCard from "@/components/home/product-card";

export default function ProductsPreview() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          eyebrow="Featured Products"
          title="Homemade Favorites Loved By Everyone"
          description="Discover some of our most popular homemade snacks and specialty products."
          center
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <ProductCard
            title="Besan Ladoo"
            description="Traditional homemade besan ladoos made with pure ingredients and authentic taste."
            image="/images/homemade-besan-ladoo-vadodara.jpg"
          />

          <ProductCard
            title="Premium Dry Fruit Ladoo"
            description="Nutritious dry fruit ladoos prepared using premium quality ingredients."
            image="/images/premium-dry-fruit-ladoo-vadodara.jpg"
          />

          <ProductCard
            title="Fresh Dhokla"
            description="Soft, fresh and delicious homemade dhokla prepared daily."
            image="/images/fresh-homemade-dhokla-vadodara.jpg"
          />

        </div>

      </Container>
    </section>
  );
}