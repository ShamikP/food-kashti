import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919799100651"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition
        hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </Link>
  );
}