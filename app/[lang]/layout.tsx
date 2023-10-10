import "./styles/globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { El_Messiri, Plaster } from "next/font/google";
import Navbar from "./components/navbar";
import type { IRootLayout } from "./types";
import { AppProvider } from "./context/AppContext";
import { Footer } from "./components/footer";

const global = El_Messiri({ subsets: ["latin"], display: "swap", preload: true });
export const plaster = Plaster({ weight: ["400"], style: ["normal"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Apartments 19",
  description: "Apartments Sombor 19",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale as Locale }));
}

export default function RootLayout({ children, params }: IRootLayout) {
  return (
    <html lang={params.lang}>
      <body className={global.className}>
        <AppProvider>
          <Navbar lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </AppProvider>
      </body>
    </html>
  );
}
