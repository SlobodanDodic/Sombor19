// import { Grenze_Gotisch } from "next/font/google";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { Arima } from "next/font/google";
import Navbar from "./components/navbar";
import type { RootLayoutProps } from "./types";
import { FormProvider } from "./context/FormContext";

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
        <FormProvider>
          <Navbar lang={params.lang} />
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
