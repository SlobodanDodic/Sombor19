import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { HomePage, IntroPage } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <>
      <HomePage />
      <IntroPage home={home} lang={lang} />
    </>
  );
}
