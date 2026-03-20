import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jain Financial Consultancy | Loans, Investment & Real Estate Experts",
  description:
    "Get personal loans, business loans, investment advisory & real estate financing from India's trusted financial experts. Free consultation. ₹500Cr+ disbursed.",
  keywords: [
    "financial consultancy India",
    "personal loan",
    "business loan",
    "investment advisory",
    "real estate finance",
  ],
  openGraph: {
    title: "Jain Financial — Smart Financial Solutions",
    description: "₹500Cr+ disbursed. 2000+ clients. 98.6% approval rate.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${dmSans.variable} ${bebasNeue.variable}`}
    >
      <body>
        {children}
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
