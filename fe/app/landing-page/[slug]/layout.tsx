import React from "react";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import JustForSEO from "@/app/(home)/_components/JustForSEO";
import { Providers } from "@/app/providers";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head></head>
      <body
        className={clsx(
          "min-h-screen  bg-slate-50 antialiased",
          fontBoosterBlack.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex min-h-[100dvh] flex-col justify-between bg-secondary-50">
            <JustForSEO />

            {/* page */}
            <main className="container mx-auto max-w-[1280px]">
              {/* <main className="container mx-auto max-w-7xl flex-grow"> */}
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
