import localFont from "next/font/local";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-VariableFont_wght.ttf",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "variable",
  adjustFontFallback: false,
});

const FrederickatheGreat = localFont({
  src: "./fonts/FrederickatheGreat-Regular.ttf",
  variable: "--font-frederickathegreat",
  display: "swap",
  weight: "variable",
  adjustFontFallback: false,
});

export { vazirmatn, FrederickatheGreat };
