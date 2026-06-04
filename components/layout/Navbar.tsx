"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Container from "@/components/shared/container";
import { navigationLinks } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="Food Kashti"
              width={70}
              height={70}
              priority
              className="lg:w-[90px] lg:h-[90px]"
            />

            <div>
              <h2 className="heading-font text-2xl lg:text-3xl text-brand">
                Food Kashti
              </h2>

              <p className="text-xs text-muted-foreground">
                Sailing the Joy of Food
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`body-font transition relative ${
                    isActive
                      ? "text-primary-brand font-semibold"
                      : "text-brand hover:text-primary-brand"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary-brand rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <a
              href="https://wa.me/919799100651"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden text-brand"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="lg:hidden border-t border-border py-6">
            <div className="flex flex-col gap-4">

              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg py-2 transition ${
                      isActive
                        ? "text-primary-brand font-semibold"
                        : "text-brand"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <a
                href="https://wa.me/919799100651"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="whatsapp"
                  className="w-full mt-2"
                >
                  WhatsApp Us
                </Button>
              </a>

            </div>
          </div>
        )}
      </Container>
    </header>
  );
}