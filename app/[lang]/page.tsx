import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { HeadingPage, SvgPage, PrologPage, QueryPage, ReviewsPage } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home, navigation } = await getDictionary(lang);

  return (
    <>
      <div className="relative w-screen mt-2 md:mt-10">
        <HeadingPage home={home} />
        <SvgPage />
      </div>

      <PrologPage home={home} lang={lang} navigation={navigation} />
      <ReviewsPage home={home} />
      <QueryPage home={home} lang={lang} />
    </>
  );
}
