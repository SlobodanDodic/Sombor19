import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import {
  HeadingPage,
  SvgPage,
  PrologPage,
  QueryPage,
  ReviewsPage,
  ParallaxText,
  TestimonialsPage,
} from "./components/home";
import { plaster } from "./layout";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { navigation, home, testimonials } = await getDictionary(lang);

  return (
    <>
      <div className="relative w-screen mt-2 md:mt-10">
        <HeadingPage home={home} />
        <SvgPage />
      </div>

      <PrologPage home={home} lang={lang} navigation={navigation} />
      <ReviewsPage home={home} />

      <section className={`relative w-screen max-w-6xl mx-auto lg:border-x border-black/30 py-5 ${plaster.className}`}>
        <ParallaxText baseVelocity={-3}>BOOKING</ParallaxText>
        <ParallaxText baseVelocity={2}>GUEST⋆REVIEWS</ParallaxText>
      </section>

      <TestimonialsPage testimonials={testimonials} />

      <QueryPage home={home} lang={lang} />
    </>
  );
}
