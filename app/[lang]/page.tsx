import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import HomeImg from "./assets/heroOK.jpg";
import { AppealBar, ReviewCard } from "./components/home";
import { BiSolidDownArrow } from "react-icons/bi";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  return (
    <div className="">
      <div className="flex flex-col min-h-[100svh] overflow-hidden">
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
          className="absolute top-0 left-0 h-[100svh] w-screen brightness-[39%] -z-10"
        />

        <div className="clip absolute bottom-0 left-0 h-40 w-screen bg-gradient-to-b from-transparent to-white -z-10" />

        <AppealBar home={page.home} lang={lang} />

        <div className="flex justify-center items-center mt-7">
          <BiSolidDownArrow className="h-7 w-7 text-amber-600" />
        </div>
      </div>
      <ReviewCard />
    </div>
  );
}
