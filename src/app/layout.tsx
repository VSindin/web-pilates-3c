import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/constants";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: BUSINESS.seo.title,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.seo.description,
  keywords: [...BUSINESS.seo.keywords],
  metadataBase: new URL(BUSINESS.seo.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    url: BUSINESS.seo.url,
    siteName: BUSINESS.name,
    locale: "es_ES",
    type: "website",
    images: [{ url: BUSINESS.seo.ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: [BUSINESS.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-700">
        <JsonLd />
        <Header />
        <main
          className="relative z-10 bg-white pb-20 md:pb-0"
          style={{ marginBottom: "var(--footer-height, 500px)" }}
        >
          {children}
        </main>
        <MobileBottomBar />
      </body>
    </html>
  );
}
