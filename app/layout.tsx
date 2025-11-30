import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lobos Group - Professional Cleaning Services in New Orleans",
  description: "Expert cleaning and organization services for homes and businesses in New Orleans. Residential cleaning, commercial cleaning, organization services, and short-term rental turnovers.",
  openGraph: {
    title: "Lobos Group - Professional Cleaning Services in New Orleans",
    description: "Expert cleaning and organization services for homes and businesses in New Orleans. Residential cleaning, commercial cleaning, organization services, and short-term rental turnovers.",
    url: "https://lobosgroup.com",
    siteName: "Lobos Group",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Lobos Group Cleaning Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lobos Group - Professional Cleaning Services in New Orleans",
    description: "Expert cleaning and organization services for homes and businesses in New Orleans.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
