import Container from "@/components/shared/container";

export default function GalleryHero() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Our Gallery
          </p>

          <h1 className="heading-font text-5xl lg:text-7xl text-brand mb-8">
            A Glimpse Into Our Food Journey
          </h1>

          <p className="body-font text-xl text-muted-foreground leading-relaxed">
            Explore our homemade delicacies, catering events, breakfast deliveries
            and special food arrangements prepared with care across Vadodara.
          </p>
        </div>
      </Container>
    </section>
  );
}