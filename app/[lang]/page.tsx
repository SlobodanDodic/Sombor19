import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import HomeImg from "./assets/hero.jpg";
// import FogImg from "./assets/fog.png";
import { AppealBar } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <Image
        src={HomeImg}
        alt="home"
        priority={true}
        placeholder="blur"
        width="1200"
        height="600"
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover" }}
        className="h-screen w-screen brightness-[39%] -z-10"
      />

      <AppealBar home={page.home} lang={lang} />

      <div className="clip absolute bottom-0 left-0 h-1/6 w-screen bg-gradient-to-b from-transparent to-white z-10" />

      {/* <Image
        src={FogImg}
        alt="home"
        placeholder="blur"
        width="1200"
        height="600"
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover" }}
        className="absolute -bottom-60 left-0 h-screen w-screen -z-10"
      /> */}

      <div className="flex justify-center items-center h-60">Something</div>
    </div>
  );
}
