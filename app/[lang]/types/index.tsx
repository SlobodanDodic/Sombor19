import { Locale } from "@/i18n.config";
import { Dispatch, ReactNode, SetStateAction } from "react";
// import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

// FormContext
export interface ChildrenProps {
  children: ReactNode;
}

export interface DateRangeProps {
  startDate: string;
  endDate: string;
}

export interface AllFormDataProps {
  dateRange: DateRangeProps;
  guests: string;
}

export interface FormContextType {
  formData: AllFormDataProps;
  setFormData: Dispatch<SetStateAction<any>>;
}

// Layout
export interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

// Navbar
export interface LangProps {
  lang: Locale;
}

export interface MenuProps {
  lang: Locale;
  navigation: {
    home: string;
    about: string;
    rooms: string;
    contact: string;
  };
  className?: string;
}

// AppealBar
export interface AppealBarProps {
  lang: Locale;
  home: {
    flag: string;
    headline: string;
    title: string;
    visit: string;
    welcome: string;
    select: string;
    guests: string;
    submit: string;
    about: string;
  };
}

// Contact

export interface HomeProps {
  home: {
    flag: string;
    headline: string;
    title: string;
    visit: string;
    welcome: string;
    select: string;
    guests: string;
    submit: string;
    about: string;
  };
}

// IntroSection
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
