type FeatureCardProps = {
    title: string;
    description: string;
  };
  
  export default function FeatureCard({
    title,
    description,
  }: FeatureCardProps) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
        <h3 className="heading-font text-2xl text-brand mb-4">
          {title}
        </h3>
  
        <p className="body-font text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    );
  }