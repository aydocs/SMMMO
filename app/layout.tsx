import type { Metadata } from "next";
import "./css/bootstrap.css";
import "./css/maicons.css";
import "./css/mobster.css";
import "./css/animate.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Oda Yönetim Yazılımı",
  description:
    "Serbest Muhasebeci Mali Müşavirler Odası(Oda Yönetim Yazılımı) mobil uygulamasının tanıtım web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
        {false && <Navbar />}
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
