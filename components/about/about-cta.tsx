import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container";
import { CONTACT } from "@/constants/contact";

export default function AboutCTA() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="bg-white border border-border rounded-[2rem] p-10 md:p-16 text-center shadow-sm">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </p>

          <h2 className="heading-font text-4xl md:text-5xl text-brand">
            Ready To Experience Homemade Food?
          </h2>

          <p className="body-font text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Fresh homemade meals, catering services, breakfast delivery,
            Jain food and healthy snacks prepared with care and delivered
            across Vadodara.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a href={`tel:${CONTACT.phone}`}>
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

        </div>
      </Container>
    </section>
  );
}