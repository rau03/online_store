import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holy Family Pickleball Club",
  description:
    "Join the Holy Family Pickleball Club - A community of pickleball enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  );
}
