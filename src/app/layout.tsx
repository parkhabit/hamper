"use client";

import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import { Suspense, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div
            className={`w-[70%] h-[100%] bg-black bg-opacity-50 right-0 absolute ${
              menuOpen ? "visible" : "hidden"
            }`}
            onClick={() => setMenuOpen(false)}
          />
          {children}
        </body>
      </html>
    </Suspense>
  );
}
