import Container from "@/components/shared/container";
import SectionHeading from "@/components/shared/section-heading";

export default function HomePage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Food Kashti"
          title="Fresh Homemade Food for Every Journey"
          description="Homemade meals, catering services, tiffin solutions and healthy snacks delivered with care."
        />
      </Container>
    </main>
  );
}