import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "../providers";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import aboutChillaxFooter from "@/assets/image/about-chillax/about-chillax-middle.png";

import "./app.css";
import Image from "next/image";
import JustForSEO from "@/app/_components/JustForSEO";

export const metadata: Metadata = siteConfig;

export default function RootLayout(props: any) {
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
            <Navbar />

            {/* page */}
            <main className=" flex grow flex-col justify-between">
              {/* <main className="container mx-auto max-w-7xl flex-grow"> */}
              {props.children}
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
