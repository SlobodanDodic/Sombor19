import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { HeadingPage, SvgPage, PrologPage } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <>
      <div className="relative w-screen md:mt-4">
        <HeadingPage home={home} />
        <SvgPage />
      </div>
      <PrologPage home={home} lang={lang} />
    </>
  );
}
