import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiranmor.vercel.app"),
  title: "Kiran Mor | Software & Systems Portfolio",
  description:
    "ECE graduate from the University of Toronto building software, cloud infrastructure, and embedded systems.",
  openGraph: {
    title: "Kiran Mor | Software. Systems. Cloud.",
    description:
      "ECE graduate from the University of Toronto building software, cloud infrastructure, and embedded systems.",
    url: "https://kiranmor.vercel.app",
    siteName: "Kiran Mor Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kiran Mor portfolio preview",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Mor | Software. Systems. Cloud.",
    description:
      "ECE graduate from the University of Toronto building software, cloud infrastructure, and embedded systems.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
