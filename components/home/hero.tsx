import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
              Food Kashti
            </p>

            <h1 className="heading-font text-5xl lg:text-6xl text-brand leading-tight">
              Fresh Homemade Food for Every Journey
            </h1>

            <p className="body-font text-lg text-muted-foreground mt-6 max-w-xl">
              Homemade meals, catering services, tiffin solutions,
              train food delivery and healthy snacks prepared with
              care and delivered across Vadodara.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">

  <Button className="bg-orange-500 text-white h-12 px-8 text-base font-semibold rounded-xl">
    Order Now
  </Button>

  <a
    href="https://wa.me/919799100651"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="whatsapp"
      className="h-12 px-8 text-base font-semibold rounded-xl"
    >
      WhatsApp Us
    </Button>
  </a>

</div>

          </div>

          {/* Right Image */}

          <div className="relative">

          <Image
  // src="/images/bulk-food-catering-orders-vadodara.jpg"
  src="/images/logo.png"
  alt="Homemade catering food services in Vadodara"
  width={700}
  height={850}
  priority
  className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
/>

          </div>

        </div>
      </Container>
    </section>
  );
}