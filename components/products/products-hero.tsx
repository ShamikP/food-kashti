import Container from "@/components/shared/container";

export default function ProductsHero() {
  return (
    <section className="section-padding">
      <Container>

        <div className="max-w-4xl mx-auto text-center">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Featured Products
          </p>

          <h1 className="heading-font text-5xl lg:text-6xl text-brand leading-[1.1]">
            Homemade Delicacies Crafted With Tradition
          </h1>

          <p className="body-font text-lg text-muted-foreground mt-8">
            Discover our range of homemade snacks, sweets and specialty
            food items prepared using quality ingredients and authentic
            traditional recipes.
          </p>

        </div>

      </Container>
    </section>
  );
}