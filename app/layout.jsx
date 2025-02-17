import { Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const doppelganger = localFont({
  src: "./fonts/Doppelganger-Display.otf",
  variable: "--font-doppelganger",
});

export const metadata = {
  title: "Maria Events | Event agency",
  description: "Maria Events is a boutique event agency that specializes in creating unforgettable experiences for businesses and individuals alike.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfairDisplay.variable} ${poppins.variable} ${doppelganger.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
