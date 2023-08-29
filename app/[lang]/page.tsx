import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { LandingPage, ReviewCard } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <>
      <LandingPage home={home} lang={lang} />
      <ReviewCard home={home} />
    </>
  );
}
