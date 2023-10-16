import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { AboutMe } from "../components/about/AboutMe";
import { AboutSombor } from "../components/about/AboutSombor";

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
  const { about } = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center pt-10 w-screen max-w-6xl mx-auto">
      <AboutMe about={about} />
      <AboutSombor about={about} />
    </div>
  );
}
