import { Metadata } from "next";

export type SiteConfig = typeof siteConfig;

export const siteConfig: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_METADATA_BASE ?? "https://chillax.vn",
  ),
  title: {
    default: "Sữa Chillax",
    template: `%s - Chillax`,
  },
  description:
    "Chillax - Người bạn đồng hành cùng mẹ trong sự phát triển toàn diện của trẻ",

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  applicationName: "Chillax",
  keywords: ["chillax", "BA Gold", "sữa cho trẻ biếng ăn"],
  openGraph: {
    type: "website",
    title: "Sữa Chillax",
    description:
      "Chillax - Người bạn đồng hành cùng mẹ trong sự phát triển toàn diện của trẻ",
    countryName: "Việt Nam",
    images: ["/logo.jpg"],
    url: "https://chillax.vn",
    siteName: "Sữa Chillax",
  },
};
