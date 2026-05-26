import type { Metadata } from "next";
import { Montserrat, Dancing_Script, Pacifico } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TAT Rocks — We do geek things",
  description:
    "A creative & digital agency on IT solutions. Software development, API integration, e-commerce, digital marketing and customer services.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "TAT Rocks — We do geek things",
    description:
      "A creative & digital agency on IT solutions. Software development, API integration, e-commerce, digital marketing and customer services.",
    url: "https://the-tat-rocks.vercel.app",
    siteName: "TAT Rocks",
    images: [{ url: "/favicon.ico", width: 512, height: 512, alt: "TAT Rocks" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TAT Rocks — We do geek things",
    description:
      "A creative & digital agency on IT solutions. Software development, API integration, e-commerce, digital marketing and customer services.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dancingScript.variable} ${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
