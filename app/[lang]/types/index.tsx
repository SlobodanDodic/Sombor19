import { Locale } from "@/i18n.config";
import { Dispatch, ReactNode, SetStateAction } from "react";

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

export interface IMenu {
  lang: Locale;
  navigation: {
    home: string;
    about: string;
    rooms: string;
    contact: string;
  };
  className?: string;
  classSmView?: string;
  onClick?: Dispatch<SetStateAction<any>>;
}

export interface IHome {
  lang?: Locale;
  home: {
    flag: string;
    headline: string;
    visit: string;

    welcome: string;
    title: string;

    select: string;
    guests: string;
    submit: string;

    booking: string;
    staff: string;
    facilities: string;
    cleanliness: string;
    comfort: string;
    value: string;
    location: string;
    wifi: string;
  };
}
