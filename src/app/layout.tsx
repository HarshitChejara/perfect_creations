import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-[#0B0B14] text-white">
        <Header />
        {children}
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919712973274"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </body>
    </html>
  );
}
