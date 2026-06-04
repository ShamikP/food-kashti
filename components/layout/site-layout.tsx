import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
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