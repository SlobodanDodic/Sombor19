import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import booking from "../../assets/media-icons/booking.png";
import facebook from "../../assets/media-icons/facebook.png";
import instagram from "../../assets/media-icons/instagram.png";
import twitter from "../../assets/media-icons/twitter.png";
import Link from "next/link";

export async function Footer({ lang }: { lang: Locale }) {
  const { navigation, home } = await getDictionary(lang);

  return (
    <>
      <svg className="w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300">
        <path
          fill="#292524"
          fillOpacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,144C672,160,768,160,864,138.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="flex flex-col justify-center -mt-1 bg-stone-800">
        <div className="max-w-2xl mx-auto text-white pb-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl text-white/80">{home.apartment} 19</h3>
            <p className="pt-2 text-sm text-amber-600">
              <span className="text-amber-500">+381</span> 63 <span className="text-amber-700">540433</span>
            </p>
            <p className="text-sm text-amber-600">
              sombor<span className="text-amber-500">19</span>apartments<span className="text-amber-800">@</span>
              gmail.com
            </p>
          </div>

          <div className="flex w-full justify-center items-center pt-7 pb-8">
            <Link href="https://www.booking.com/hotel/rs/sombor-19-central-apartment.en-gb.html">
              <Image
                src={booking}
                alt="booking"
                width={64}
                // height={24}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="brightness-125 md:w-7 md:h-7 mx-2 grayscale hover:grayscale-0 transform transition-all"
              />
            </Link>
            <Link href="https://www.facebook.com/milosevic.dragan.3">
              <Image
                src={facebook}
                alt="facebook"
                width={64}
                // height={24}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="md:w-7 md:h-7 mx-2 grayscale hover:grayscale-0 transform transition-all"
              />
            </Link>
            <Link href="">
              <Image
                src={instagram}
                alt="instagram"
                width={64}
                // height={24}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="md:w-7 md:h-7 mx-2 grayscale hover:grayscale-0 transform transition-all"
              />
            </Link>
            <Link href="">
              <Image
                src={twitter}
                alt="twitter"
                width={64}
                // height={24}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="md:w-7 md:h-7 mx-2 grayscale hover:grayscale-0 transform transition-all"
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-white/80 pb-5">
            <p className="order-2 md:order-1 mt-3 md:mt-0">&copy; 2023 Central Apartment 19</p>
            <div className="order-1 md:order-2">
              <Link href={`/${lang}`} className="px-2">
                {navigation.home}
              </Link>
              <Link href={`/${lang}/about`} className="px-2 border-l border-amber-600">
                {navigation.about}
              </Link>
              <Link href={`/${lang}/rooms`} className="px-2 border-l border-amber-600">
                {navigation.rooms}
              </Link>
              <Link href={`/${lang}/contact`} className="px-2 border-l border-amber-600">
                {navigation.contact}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
