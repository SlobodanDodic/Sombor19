import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import dynamic from "next/dynamic";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const { navigation, home } = await getDictionary(lang);

  const MapWithNoSSR = dynamic(() => import("../components/contact/Map"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col items-center pt-4">
      <p className="py-6 font-bold text-shadow shadow-stone-800 text-5xl text-amber-600">{navigation.contact}</p>

      <div className="flex flex-col justify-center items-center mt-2 mb-8">
        <h4 className="font-medium text-stone-600">Venac Živojina Mišića 19</h4>
        <h4 className="font-medium text-stone-600">Sombor, Serbia</h4>
        <h4 className="font-medium text-stone-600">+381 63 540 433</h4>
      </div>

      {/* <Inputs home={home} /> */}
      <div id="map" className="w-[90%] h-[500px] -z-0">
        <MapWithNoSSR />
      </div>
    </div>
  );
}
