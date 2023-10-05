import { Locale } from "@/i18n.config";
import { Dispatch, ReactNode, SetStateAction } from "react";

// import { MotionValue } from "framer-motion";
// onClick?: Dispatch<SetStateAction<any>>;

export interface IChildren {
  children: ReactNode;
}

export interface IFormData {
  dateRange: {
    start: string;
    end: string;
  };
  guests: string;
}

export interface IDateRange {
  value: {
    start: string;
    end: string;
  };
  placeholder: string;
}

export interface IFormContext {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<any>>;
}

export interface IRootLayout {
  children: React.ReactNode;
  params: { lang: Locale };
}

export interface ILang {
  lang: Locale;
}

export interface ITypewriter {
  text: string;
  delay: number;
  className: string;
}

// Dictionaries:

export type CombinedProps = IHome & IMenu;

export interface IMenu {
  lang: Locale;
  navigation: {
    home: string;
    about: string;
    rooms: string;
    contact: string;
  };
}

export interface IHome {
  lang?: Locale;
  home: {
    flag: string;
    central: string;
    apartment: string;
    welcome: string;
    sombor: string;
    accommodation: string;
    introText: string;

    booking: {
      headingGuest: string;
      headingHost: string;
      average: string;
      staff: string;
      facilities: string;
      cleanliness: string;
      comfort: string;
      value: string;
      location: string;
      wifi: string;
    };

    query: {
      visit: string;
      select: string;
      guests: string;
      submit: string;
    };
  };
}
