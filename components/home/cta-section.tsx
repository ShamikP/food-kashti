import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="bg-white rounded-3xl border border-border p-10 md:p-16 text-center shadow-sm">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </p>

          <h2 className="heading-font text-5xl text-brand max-w-4xl mx-auto">
            Ready To Order Homemade Food?
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Serving Vadodara with fresh homemade meals, catering
            services, breakfast delivery, Jain food and healthy
            snacks prepared with care.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a href="tel:+919799100651">
            <div className="flex flex-wrap justify-center gap-5 mt-8">

<a href="tel:9799100651">
  <Button
    className="bg-orange-500 text-white h-12 px-10 text-lg font-semibold rounded-xl"
  >
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
    className="h-12 px-10 text-lg font-semibold rounded-xl"
  >
    WhatsApp Us
  </Button>
</a>

</div>
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}