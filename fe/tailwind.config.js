import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {},
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#145099",
              foreground: "#ffffff",
              50: "#E8F1FC",
              100: "#C0D9F7",
              200: "#97C0F1",
              300: "#6FA7EC",
              400: "#468FE7",
              500: "#145099",
              600: "#185EB4",
              700: "#124787",
              800: "#0C2F5A",
              900: "#06182D",
            },
          },
        },
      },
    }),
  ],
};
