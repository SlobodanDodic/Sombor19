import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { HomePage, IntroPage } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <div>
      <HomePage home={home} />
      {/* <IntroPage home={home} lang={lang} /> */}
    </div>
  );
}
