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
  src: "./vlBoosterNextfy/VLBOOSTERNEXTFY-BLACK.otf",
});
export const fontBoosterThin = localFont({
  src: "./vlBoosterNextfy/VLBOOSTERNEXTFY-THIN.otf",
});

export const fontBalooMd = localFont({
  src: "./baloo2/Baloo2-Medium.ttf",
});
export const fontBalooBold = localFont({
  src: "./baloo2/Baloo2-Bold.ttf",
});
export const fontBaloExtraBold = localFont({
  src: "./baloo2/Baloo2-ExtraBold.ttf",
});
export const fontBaloSemiBold = localFont({
  src: "./baloo2/Baloo2-SemiBold.ttf",
});
export const fontBaloo = localFont({
  src: "./baloo2/Baloo2-VariableFont_wght.ttf",
});
