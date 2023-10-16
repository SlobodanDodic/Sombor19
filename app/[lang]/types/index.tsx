import { Locale } from "@/i18n.config";
import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IFormData {
  dateRange: {
    start: string;
    end: string;
  };
  guests: string;
}

export interface IAppContext {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<any>>;
  openTestimonial: boolean;
  toggleTestimonialModal: () => void;
  selectedTestimonial: ITestimonial;
  setSelectedTestimonial: Dispatch<SetStateAction<any>>;
}

export interface IChildren {
  children: ReactNode;
}

export interface IDateRange {
  value: {
    start: string;
    end: string;
  };
  placeholder: string;
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

export interface ITestimonial {
  name: string;
  date: string;
  rating: string;
  title: string;
  visitorType: string;
  country: string;
  text: string;
}

export interface ITestimonials {
  testimonials: ITestimonial[];
}

export interface ITestimonialSelected {
  testimonial: ITestimonial;
  onReadMore: () => void;
}

export interface IAbout {
  lang?: Locale;
  about: {
    title: string;
    greetings: string;
    prolog: string;
    hometown: string;
    sombor: string;
    soText1: string;
    soText2: string;
    soText3: string;
  };
}
