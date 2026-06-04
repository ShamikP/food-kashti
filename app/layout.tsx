import LocalBusinessSchema from "@/components/seo/local-business-schema";
import type { Metadata } from "next";
import { Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";

import SiteLayout from "@/components/layout/site-layout";

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
  metadataBase: new URL("https://foodkashti.in"),

  title: {
    default: "Food Kashti | Homemade Food & Catering in Vadodara",
    template: "%s | Food Kashti",
  },

  description:
    "Food Kashti offers homemade food, catering services, tiffin services, train food delivery, healthy snacks and Jain food solutions across Vadodara.",

  keywords: [
    "Food Kashti",
    "Homemade Food Vadodara",
    "Tiffin Service Vadodara",
    "Catering Services Vadodara",
    "Jain Food Vadodara",
    "Breakfast Delivery Vadodara",
    "Train Food Delivery Vadodara",
    "Homemade Snacks Vadodara",
    "Event Catering Vadodara",
    "Food Catering Vadodara",
  ],

  authors: [
    {
      name: "Food Kashti",
    },
  ],

  creator: "Food Kashti",

  publisher: "Food Kashti",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Food Kashti | Homemade Food & Catering in Vadodara",

    description:
      "Fresh homemade food, tiffin services, catering, Jain food and train food delivery across Vadodara.",

    url: "https://foodkashti.in",

    siteName: "Food Kashti",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Food Kashti",

    description:
      "Homemade food, catering services and tiffin solutions in Vadodara.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  <LocalBusinessSchema />

  <SiteLayout>
    {children}
  </SiteLayout>
</body>
    </html>
  );
}