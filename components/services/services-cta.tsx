import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container";

export default function ServicesCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center shadow-sm">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </p>

          <h2 className="heading-font text-4xl md:text-5xl text-brand mb-6">
            Need Catering Or Daily Food Service?
          </h2>

          <p className="body-font text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            From family functions and office lunches to daily tiffin
            services and train food delivery, Food Kashti offers fresh
            homemade meals prepared with care and hygiene.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a href="tel:9799100651">
              <Button className="bg-orange-500 text-white h-14 px-10 text-lg font-semibold rounded-xl">
                Call Us
              </Button>
            </a>

            <a
              href="https://wa.me/919799100651"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                className="h-14 px-10 text-lg font-semibold rounded-xl"
              >
                WhatsApp Us
              </Button>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}