import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <Phone className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Call Us</h3>
            <p className="text-lg font-medium mb-2">9799100651</p>
            <p className="text-muted-foreground">
              Available for orders and enquiries.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <MessageCircle className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg font-medium mb-2">9799100651</p>
            <p className="text-muted-foreground">
              Quick responses for food orders.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <MapPin className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="font-medium mb-2">Vadodara, Gujarat</p>
            <p className="text-muted-foreground">
              Serving homes, offices and events across Vadodara.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>9799100651</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>foodkashti@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>
                    Sanmati Park, Vemali,
                    Sama-Savli Rd,
                    New Sama,
                    Vadodara,
                    Gujarat 390024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              Need Catering For An Event?
            </h2>

            <ul className="space-y-4 mb-8 text-lg">
              <li>✓ Family Functions</li>
              <li>✓ Corporate Events</li>
              <li>✓ Jain Food Requirements</li>
              <li>✓ Breakfast Delivery</li>
              <li>✓ Food In Train</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="tel:9799100651"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/919799100651"
                target="_blank"
                className="px-6 py-3 rounded-full bg-green-600 text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}