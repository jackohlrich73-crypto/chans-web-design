import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://chanswebdesign.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chan’s Web Design | Affordable Contractor Websites",
  description:
    "Chan’s Web Design builds affordable contractor websites and mobile-friendly websites for local service businesses. Website design starts at $200 while portfolio spots are available.",
  keywords: [
    "affordable contractor websites",
    "contractor web design",
    "websites for contractors",
    "Lincoln NE contractor websites",
    "small business websites",
    "local business web design",
    "affordable web design Lincoln NE",
    "website design for welders",
    "website design for plumbers",
    "website design for electricians",
    "website design for landscapers",
    "contractor website designer Nebraska"
  ],
  openGraph: {
    title: "Chan’s Web Design | Affordable Contractor Websites",
    description:
      "Affordable contractor websites and clean mobile-friendly website design for local service businesses, starting at $200 while portfolio spots are available.",
    url: siteUrl,
    siteName: "Chan’s Web Design",
    images: [
      {
        url: "/images/chans-logo.png",
        width: 1254,
        height: 1254,
        alt: "Chan’s Web Design logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chan’s Web Design | Affordable Contractor Websites",
    description:
      "Affordable contractor websites for contractors and local service businesses, starting at $200 while portfolio spots are available.",
    images: ["/images/chans-logo.png"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06111f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
