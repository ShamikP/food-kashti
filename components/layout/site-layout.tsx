import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({
  children,
}: SiteLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}