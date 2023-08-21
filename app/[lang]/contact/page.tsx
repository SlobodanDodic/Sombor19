import { getDictionary } from "@/lib/dictionary";
import Inputs from "../components/contact/Inputs";
import { Locale } from "@/i18n.config";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center">
      <h1 className="py-7">contact</h1>
      <Inputs home={page.home} />
    </div>
  );
}
