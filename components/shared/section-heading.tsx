type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
  };
  
  export default function SectionHeading({
    eyebrow,
    title,
    description,
    center = false,
  }: SectionHeadingProps) {
    return (
      <div
        className={`max-w-3xl ${
          center ? "mx-auto text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="body-font text-primary-brand font-semibold uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
        )}
  
        <h2 className="heading-font text-4xl md:text-5xl text-brand mb-4">
          {title}
        </h2>
  
        {description && (
          <p className="body-font text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    );
  }