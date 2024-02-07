import Header from "@/components/core/header/Header";
import Footer from "@/components/core/footer/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
