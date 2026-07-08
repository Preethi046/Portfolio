import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-display-raw",
  weight: "300 700",
  display: "swap",
});

export const inter = localFont({
  src: "./fonts/Inter-Variable.ttf",
  variable: "--font-body-raw",
  weight: "100 900",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-mono-raw",
  weight: "100 800",
  display: "swap",
});
