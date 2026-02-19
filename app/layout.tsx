"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "@/lib/fontawesome";
import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en" className={montserrat.variable}>
      <body >{children}</body>
    </html>
  );
}
