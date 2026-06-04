import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/constants/contact";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">

          {/* Brand */}

          <div>
            <Image
              src="/images/logo.png"
              alt="Food Kashti"
              width={110}
              height={110}
            />

            <h3 className="heading-font text-3xl text-brand mt-4">
              Food Kashti
            </h3>

            <p className="body-font mt-2 text-muted-foreground">
              Sailing the Joy of Food
            </p>

            <p className="body-font mt-3 text-muted-foreground">
              Homemade food, catering services, tiffin solutions,
              train food delivery and healthy snacks in Vadodara.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="heading-font text-2xl text-brand mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link
  href="/about"
  className="transition hover:text-primary-brand"
>
  About
</Link>
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="heading-font text-2xl text-brand mb-4">
              Contact
            </h4>

            <div className="space-y-3 body-font">
              <p>{CONTACT.city}</p>

              <p>
                <a href={`tel:${CONTACT.phone}`}>
                  {CONTACT.phone}
                </a>
              </p>

              <p>
                <a href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </p>
            </div>

            <div className="mt-5">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="whatsapp"
                  className="min-w-[160px]"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border py-5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Food Kashti. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}