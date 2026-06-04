import Container from "@/components/shared/container";
import SectionHeading from "@/components/shared/section-heading";
import ServiceCard from "@/components/home/service-card";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white/40">
      <Container>

        <SectionHeading
          eyebrow="Our Services"
          title="Homemade Food Solutions For Every Need"
          description="From daily tiffins to event catering, Food Kashti serves fresh homemade food across Vadodara."
          center
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <ServiceCard
            title="Bulk Catering Orders"
            description="Fresh homemade meals for offices, events, schools and corporate gatherings."
            image="/images/bulk-food-catering-orders-vadodara.jpg"
          />

          <ServiceCard
            title="Breakfast Delivery"
            description="Healthy homemade breakfast delivered fresh every morning."
            image="/images/homemade-breakfast-delivery-vadodara.jpg"
          />

          <ServiceCard
            title="Jain Food Catering"
            description="Pure vegetarian Jain food prepared with authentic taste and care."
            image="/images/jain-food-catering-vadodara.jpg"
          />

          <ServiceCard
            title="Homemade Snacks"
            description="Traditional homemade snacks prepared using quality ingredients."
            image="/images/homemade-masala-snacks-vadodara.jpg"
          />

        </div>

      </Container>
    </section>
  );
}