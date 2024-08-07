import React from "react";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import aboutChillaxFooter from "@/assets/image/about-chillax/about-chillax-middle.png";

import Image from "next/image";
import JustForSEO from "@/app/_components/JustForSEO";
import { Providers } from "@/app/providers";

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
          <div className="bg-main relative flex min-h-[100dvh] flex-col justify-between">
            <JustForSEO />

            {/* page */}
            <main className="container mx-auto max-w-[1280px] bg-secondary-50">
              {/* <main className="container mx-auto max-w-7xl flex-grow"> */}
              {children}
            </main>
            {/* Footer */}
            <footer>
              <div className=" w-full md:-mt-3 lg:-mt-8 xl:-mt-12">
                <Image
                  className="h-auto w-full"
                  src={aboutChillaxFooter}
                  alt="about-chillax-header"
                  width={999}
                  height={999}
                />
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
