import "./styles/globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
// import { Grenze_Gotisch } from "next/font/google";
import { Arima } from "next/font/google";
import Navbar from "./components/navbar";
import type { RootLayoutProps } from "./types";

const myFont = Arima({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apartments 19",
  description: "Apartments Sombor 19",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale as Locale }));
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={myFont.className}>
        <Navbar lang={params.lang} />
        <div className="absolute top-0 left-0 w-20 h-screen border-r-2 border-amber-600 z-10" />
        <div className="absolute top-0 left-0 w-20 h-screen bg-stone-800 -z-10" />
        {children}
      </body>
    </html>
  );
}
