import type { IFeatures } from "../../types";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { MdSmokeFree } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaPaw } from "react-icons/fa";
import { PiWheelchairMotionDuotone, PiWifiHigh } from "react-icons/pi";
import { RiParkingLine } from "react-icons/ri";
import { HiLanguage } from "react-icons/hi2";

export function BasicInfo({ features }: IFeatures) {
  const infoItems = [
    {
      icon: <RiParkingLine className="w-7 h-7 text-stone-800" />,
      title: features.parkTitle,
      desc: features.parkDesc,
    },
    {
      icon: <PiWifiHigh className="w-7 h-7 text-stone-800" />,
      title: features.wifiTitle,
      desc: features.wifiDesc,
    },
    {
      icon: <BiLogInCircle className="w-7 h-7 text-stone-800" />,
      title: features.checkInTitle,
      desc: features.checkInDesc,
    },
    {
      icon: <BiLogOutCircle className="w-7 h-7 text-stone-800" />,
      title: features.checkOutTitle,
      desc: features.checkOutDesc,
    },
    {
      icon: <MdSmokeFree className="w-7 h-7 text-stone-800" />,
      title: features.smokeTitle,
      desc: features.smokeDesc,
    },
    {
      icon: <GiMoneyStack className="w-7 h-7 text-stone-800" />,
      title: features.cashTitle,
      desc: features.cashDesc,
    },
    {
      icon: <FaPaw className="w-7 h-7 text-stone-800" />,
      title: features.petsTitle,
      desc: features.petsDesc,
    },
    {
      icon: <PiWheelchairMotionDuotone className="w-7 h-7 text-stone-800" />,
      title: features.accessTitle,
      desc: features.accessDesc,
    },
    {
      icon: <HiLanguage className="w-7 h-7 text-stone-800" />,
      title: features.langTitle,
      desc: features.langDesc,
    },
  ];

  return (
    <ol className="relative border-b-2 border-l-2 border-stone-800 rounded-2xl ml-16 mr-10">
      {infoItems.map((item, index) => (
        <li key={index} className="mx-10 h-24">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-2 ring-stone-800 bg-amber-600">
            {item.icon}
          </span>
          <time className="block mb-2 pt-2 text-lg font-semibold leading-none text-stone-700">{item.title}</time>
          <h4 className="mb-4 text-sm md:text-base text-left leading-none text-stone-600">{item.desc}</h4>
        </li>
      ))}
    </ol>
  );
}
