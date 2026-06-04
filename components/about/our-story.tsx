import Container from "@/components/shared/container";

export default function OurStory() {
  return (
    <section className="py-24 border-t border-border">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
              Our Story
            </p>

            <h2 className="heading-font text-5xl text-brand leading-tight">
              Bringing Homemade Food Back To Everyday Life
            </h2>

          </div>

          <div className="space-y-6 body-font text-lg text-muted-foreground">

            <p>
              Food Kashti was founded with a simple belief that food
              should be fresh, hygienic and prepared with the same
              care as home-cooked meals.
            </p>

            <p>
              In a world where people are increasingly dependent on
              fast food and inconsistent meal options, Food Kashti
              focuses on delivering authentic homemade food that
              families can trust.
            </p>

            <p>
              From catering events and corporate gatherings to
              breakfast delivery, Jain meals and healthy snacks,
              every order is prepared with quality ingredients and
              traditional recipes.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}