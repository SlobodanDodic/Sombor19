import { Locale } from "@/i18n.config";
import { Dispatch, ReactNode, SetStateAction } from "react";

// FormContext
export interface ChildrenProps {
  children: ReactNode;
}

export interface AllFormDataProps {
  dateRange: {
    start: string;
    end: string;
  };
  guests: string;
}

export interface DateRangeProps {
  value: {
    start: string;
    end: string;
  };
  placeholder: string;
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
