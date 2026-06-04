import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({
  title,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300">

      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="heading-font text-2xl text-brand mb-3">
          {title}
        </h3>

        <p className="body-font text-muted-foreground">
          {description}
        </p>
      </div>

    </div>
  );
}