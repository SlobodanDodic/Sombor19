import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
// import Inputs from "../components/inputs";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center pt-24 min-h-[100vh]">
      <div className="absolute top-0 left-0 w-screen h-36 py-7 text-white bg-stone-800 -z-10 border-b-2 border-amber-600 " />
      <p className="py-6 font-bold text-shadow shadow-stone-800 text-5xl text-amber-600">Contact</p>
      {/* <Inputs home={home} /> */}
    </div>
  );
}
