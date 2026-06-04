import Container from "@/components/shared/container";

export default function AboutHero() {
  return (
    <section className="py-24">
      <Container>

        <div className="max-w-4xl mx-auto text-center">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            About Food Kashti
          </p>

          <h1 className="heading-font text-5xl lg:text-6xl text-brand leading-tight">
            Homemade Food Crafted With Care And Tradition
          </h1>

          <p className="body-font text-lg text-muted-foreground mt-8">
            Food Kashti was started with a simple mission — to bring
            fresh, hygienic and homemade food to families, working
            professionals, travelers and event guests across Vadodara.
          </p>

        </div>

      </Container>
    </section>
  );
}