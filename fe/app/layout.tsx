import { Navbar } from "@/components/layout/navbar/Navbar";
// import { fontNunito } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import aboutChillaxFooter from "@/assets/image/about-chillax/about-chillax-middle.png";

import "./app.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  // 	{ media: "(prefers-color-scheme: light)", color: "white" },
  // 	{ media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen  bg-slate-50 antialiased",
          fontBoosterBlack.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="bg-main relative flex min-h-screen flex-col justify-between">
            <Navbar />
            {/* page */}
            <main className="bg-main flex flex-col justify-between">
              {/* <main className="container mx-auto max-w-7xl flex-grow"> */}
              {children}
              <div className="w-full">
                <Image
                  className="h-auto w-full"
                  src={aboutChillaxFooter}
                  alt="about-chillax-header"
                  width={999}
                  height={999}
                />
              </div>
            </main>
            {/* Footer */}
            {/* <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
