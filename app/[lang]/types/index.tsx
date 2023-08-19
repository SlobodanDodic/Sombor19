import { Locale } from "@/i18n.config";

// Layout
export interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

// IntroSectionProps
export interface IntroSectionProps {
  lang: Locale;
  home: {
    flag: string;
    headline: string;
    title: string;
    visit: string;
    welcome: string;
    about: string;
  };
}
