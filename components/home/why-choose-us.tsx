import Container from "@/components/shared/container";
import SectionHeading from "@/components/shared/section-heading";
import FeatureCard from "@/components/home/feature-card";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          eyebrow="Why Food Kashti"
          title="Why Families Choose Food Kashti"
          description="Fresh homemade food prepared with care, delivered with consistency and trusted by families across Vadodara."
          center
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <FeatureCard
            title="Homemade & Hygienic"
            description="Prepared in a clean kitchen environment using quality ingredients and traditional recipes."
          />

          <FeatureCard
            title="Fresh Daily Preparation"
            description="Every order is freshly prepared to maintain taste, nutrition and quality."
          />

          <FeatureCard
            title="Reliable Delivery"
            description="Timely food delivery for homes, offices, events and train journeys."
          />

          <FeatureCard
            title="Customized Catering"
            description="Flexible catering solutions for family events, corporate gatherings and special occasions."
          />

        </div>

      </Container>
    </section>
  );
}