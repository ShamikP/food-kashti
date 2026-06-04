import Container from "@/components/shared/container";

export default function WhyTrustUs() {
  const points = [
    "Fresh homemade food prepared daily",
    "Reliable catering for events and gatherings",
    "Hygienic preparation and quality ingredients",
    "Timely delivery across Vadodara",
    "Customized food solutions for different needs",
    "Trusted by families and working professionals",
  ];

  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
            Why Customers Trust Us
          </p>

          <h2 className="heading-font text-5xl text-brand">
            Built On Quality And Customer Satisfaction
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-5">
            We focus on consistency, freshness and service so that every
            customer receives food they can enjoy with confidence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {points.map((point) => (
            <div
              key={point}
              className="bg-white border border-border rounded-3xl p-6 shadow-sm"
            >
              <p className="body-font text-lg text-brand">
                ✓ {point}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}