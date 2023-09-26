import "./styles/globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { El_Messiri } from "next/font/google";
import Navbar from "./components/navbar";
import type { IRootLayout } from "./types";
import { FormProvider } from "./context/FormContext";

const myFont = El_Messiri({ subsets: ["latin"] });

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
      <body className={myFont.className}>
        <FormProvider>
          <Navbar lang={params.lang} />
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
