import Container from "@/components/shared/container";

const features = [
  "Fresh ingredients sourced daily",
  "Clean and hygienic food preparation",
  "Reliable delivery across Vadodara",
  "Customized catering solutions",
  "Special Jain food arrangements",
  "Authentic homemade taste",
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <Container>

        <div className="max-w-3xl mx-auto text-center">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Why Choose Food Kashti
          </p>

          <h2 className="heading-font text-4xl lg:text-5xl text-brand leading-tight">
            Homemade Food You Can Trust
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-6">
            Every meal is prepared with care, quality ingredients and
            a commitment to delivering authentic homemade taste.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {features.map((feature) => (
            <div
              key={feature}
              className="bg-card rounded-3xl border border-border p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">

                <span className="text-secondary-brand text-xl">
                  ✓
                </span>

                <p className="body-font text-lg font-medium">
                  {feature}
                </p>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}