import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { HeadingPage, SvgPage } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <div className="relative w-screen">
      <HeadingPage home={home} />
      <SvgPage />
      {/* <IntroPage home={home} lang={lang} /> */}
    </div>
  );
}
