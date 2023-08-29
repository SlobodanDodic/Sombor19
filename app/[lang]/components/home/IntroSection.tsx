import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import chairsImg from "../../assets/chairs.jpg";
import meImg from "../../assets/meImg.png";
import Link from "next/link";
import { Locale } from "@/i18n.config";

export interface IntroSectionProps {
  lang: Locale;
  home: {
    flag: string;
    headline: string;
    title: string;
    check: string;
    visit: string;
    welcome: string;
    about: string;
  };
}

export async function IntroSection({ home, lang }: IntroSectionProps) {
  const { navigation } = await getDictionary(lang);

  return <div className="relative flex flex-col"></div>;
}
