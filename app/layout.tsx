import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dultsin.com"),
  title: "Daniel Dultsin | Homepage",
  description:
    "Personal website and publications of Daniel Dultsin. A businessman with expertise in B2B sales, CRM optimization, GTM strategy, software, and written media.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Daniel Dultsin",
    "Business",
    "Entrepreneur",
    "B2B Sales",
    "Software",
    "CRM",
    "GTM",
    "Founder",
    "Startup",
    "Company",
  ],
  authors: [{ name: "Daniel Dultsin" }],
  creator: "Daniel Dultsin",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dultsin.com",
    title: "Daniel Dultsin | Homepage",
    description:
      "Personal website, publications, businesses, and portfolio of Daniel Dultsin",
    siteName: "Daniel Dultsin",
    images: [
      {
        url: "https://dultsin.com/banner-og.png",
        width: 1200,
        height: 630,
        alt: "Daniel Dultsin",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased min-h-full`}>
        {children}
      </body>
    </html>
  );
}
