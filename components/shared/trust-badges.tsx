import Container from "@/components/shared/container";

const badges = [
  "100% Homemade Food",
  "Fresh Ingredients Daily",
  "Jain Food Available",
  "Event Catering",
  "Daily Tiffin Service",
  "Train Food Delivery",
  "Hygienic Preparation",
  "Customized Food Solutions",
];

export default function TrustBadges() {
  return (
    <section className="py-20 border-t border-border">
      <Container>
        <div className="text-center mb-12">
          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Why Customers Choose Us
          </p>

          <h2 className="heading-font text-5xl text-brand">
          Why Families Trust Food Kashti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((badge) => (
            <div
              key={badge}
              className="bg-white border border-border rounded-2xl p-5 text-center font-medium text-brand shadow-sm"
            >
              ✓ {badge}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}