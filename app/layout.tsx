import type { Metadata } from "next";
import { Raleway, Dancing_Script } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TAT Rocks — Creative & Digital Agency",
  description:
    "A creative & digital agency on IT solutions. Software development, API integration, e-commerce, digital marketing and customer services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${dancingScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
