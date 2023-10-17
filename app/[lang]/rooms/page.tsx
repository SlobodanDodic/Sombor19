import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { BasicInfo, IntroGallery } from "../components/rooms";

export default async function Rooms({ params: { lang } }: { params: { lang: Locale } }) {
  const { rooms } = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center pt-10 w-screen max-w-6xl mx-auto">
      <div className="flex flex-col my-5 max-w-4xl">
        <h1>{rooms.title}</h1>
        <h4 className="py-10 px-5">{rooms.intro}</h4>
      </div>

      <IntroGallery />

      <div className="flex flex-col items-center max-w-xl mt-16">
        <h3 className="mb-10 text-stone-600">{rooms.featureTitle}</h3>
        <BasicInfo features={rooms.features} />
      </div>
    </div>
  );
}
