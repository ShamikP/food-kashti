import type { Metadata } from "next";
import { Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foodkashti.com"),

  title: {
    default: "Food Kashti | Homemade Food & Catering in Vadodara",
    template: "%s | Food Kashti",
  },

  description:
    "Food Kashti offers homemade food, catering services, tiffin services, train food delivery, healthy snacks, ready-to-cook products, and customized meal solutions in Vadodara.",

  keywords: [
    "Food Kashti",
    "Homemade Food Vadodara",
    "Catering Services Vadodara",
    "Tiffin Service Vadodara",
    "Train Food Delivery Vadodara",
    "Healthy Snacks Vadodara",
    "Homemade Snacks",
    "Ready to Cook Products",
    "Event Catering Vadodara",
  ],

  openGraph: {
    title: "Food Kashti",
    description:
      "Homemade food and catering services in Vadodara. Simple, authentic and affordable.",
    type: "website",
    locale: "en_IN",
    siteName: "Food Kashti",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${breeSerif.variable} ${poppins.variable}`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}