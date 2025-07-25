import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B14] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
