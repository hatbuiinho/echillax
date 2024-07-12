import { Metadata } from "next";

export type SiteConfig = typeof siteConfig;

export const siteConfig: Metadata = {
  title: {
    default: "Chillax",
    template: `%s - Chillax`,
  },
  description:
    "Chillax - Người bạn đồng hành cùng mẹ trong sự phát triển toàn diện của trẻ",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "Chillax",
  keywords: ["chillax", "BA Gold", "sữa cho trẻ biếng ăn"],
};
