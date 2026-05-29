import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiran Mor | Software & Systems Portfolio",
  description:
    "Portfolio for Kiran Mor, an Electrical and Computer Engineering student building full-stack, cloud, embedded, and ML systems.",
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
