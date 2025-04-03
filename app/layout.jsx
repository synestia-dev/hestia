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
  title: "Organization of business conferences in Prague - Maria Events",
  description:
    "Maria Events offers professional services for organizing business conferences and corporate events in Prague. Individual approach, extensive experience and attention to detail for the successful implementation of your event.",
  keywords:
    "organization of business conferences in Prague, corporate events Prague, event agency services in Prague, Maria Events",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "Fve12SkhYse3uu4sGpGmPHPQfVBzRtdlT_6sDrg57eg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${doppelganger.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
