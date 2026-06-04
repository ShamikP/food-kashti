import Container from "@/components/shared/container";

const testimonials = [
  {
    name: "Customer, Vadodara",
    review:
      "The food quality was excellent and delivery was on time. Everyone at our family function loved the taste and freshness.",
  },
  {
    name: "Working Professional",
    review:
      "Food Kashti's tiffin service has been a great solution for daily meals. Fresh, hygienic and homemade food every day.",
  },
  {
    name: "Event Organizer",
    review:
      "Very professional catering service. The food was delicious and the entire arrangement was handled smoothly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="max-w-3xl mx-auto text-center">

          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </p>

          <h2 className="heading-font text-5xl text-brand">
            What Our Customers Say
          </h2>

          <p className="body-font text-lg text-muted-foreground mt-6">
            Trusted by families, working professionals and event organizers
            across Vadodara.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-border rounded-3xl p-8 shadow-sm"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="body-font text-muted-foreground mb-6">
                "{testimonial.review}"
              </p>

              <p className="font-semibold text-brand">
                {testimonial.name}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}