import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Nunito,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontNunito = Nunito({
  subsets: ["vietnamese", "latin"],
  variable: "--font-nunito",
});

export const fontBoosterBlack = localFont({
  src: "./VLBOOSTERNEXTFY-BLACK.otf",
});
export const fontBoosterThin = localFont({ src: "./VLBOOSTERNEXTFY-THIN.otf" });
