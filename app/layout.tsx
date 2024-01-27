import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(marketing)/_Components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone by Robert",
  description: "Connected workspaces for wiki",
  icons: {
    icon: [
      {
        media: "(prefers-color-sheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },

      {
        media: "(prefers-color-sheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
