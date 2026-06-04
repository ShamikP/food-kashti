import Container from "@/components/shared/container";

export default function MissionValues() {
  const values = [
    {
      title: "Freshness",
      description:
        "Every meal is prepared fresh using quality ingredients and traditional methods.",
    },
    {
      title: "Hygiene",
      description:
        "We maintain clean preparation practices to ensure safe and healthy food.",
    },
    {
      title: "Trust",
      description:
        "Customers rely on us for consistent taste, quality and dependable service.",
    },
    {
      title: "Customer Care",
      description:
        "Every order is prepared with attention to detail and a commitment to satisfaction.",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
            Mission & Values
          </p>

          <h2 className="heading-font text-5xl text-brand">
            What Guides Everything We Do
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-5">
            Our mission is to serve fresh homemade food while maintaining
            quality, hygiene and customer trust in every order.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-3xl border border-border p-8 shadow-sm"
            >
              <h3 className="heading-font text-3xl text-brand mb-4">
                {value.title}
              </h3>

              <p className="body-font text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}