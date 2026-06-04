import Container from "@/components/shared/container";

export default function LocationMap() {
  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Visit Us
          </p>

          <h2 className="heading-font text-5xl text-brand">
            Serving Fresh Homemade Food Across Vadodara
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-6">
            Located in New Sama, Vadodara. Contact us for catering,
            tiffin services, Jain food requirements and train food delivery.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">

          <iframe
            src="https://maps.google.com/maps?q=Sanmati%20Park,%20Vemali,%20Sama-Savli%20Road,%20Vadodara,%20Gujarat%20390024&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="w-full"
          />

        </div>

      </Container>
    </section>
  );
}