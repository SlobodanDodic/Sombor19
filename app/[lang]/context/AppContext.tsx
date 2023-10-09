"use client";
import { createContext, useContext, useState } from "react";
import type { IFormData, IChildren, IAppContext, ITestimonial } from "../types";

const initialData = {
  dateRange: {
    start: "",
    end: "",
  },
  guests: "",
};

const testimonialData = {
  name: "",
  date: "",
  rating: "",
  title: "",
  visitorType: "",
  country: "",
  text: "",
};

const AppContext = createContext<IAppContext>({
  formData: initialData,
  setFormData: (): void => {
    // now it's not empty
  },
  openTestimonial: false,
  toggleTestimonialModal: (): void => {},
  selectedTestimonial: testimonialData,
  setSelectedTestimonial: (): void => {
    // now it's not empty
  },
});

export const AppProvider: React.FC<IChildren> = ({ children }: IChildren) => {
  const [formData, setFormData] = useState<IFormData>(initialData);
  const [openTestimonial, setOpenTestimonial] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<ITestimonial>(testimonialData);

  const toggleTestimonialModal = () => {
    setOpenTestimonial(!openTestimonial);
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        openTestimonial,
        toggleTestimonialModal,
        selectedTestimonial,
        setSelectedTestimonial,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export function useFormState() {
  return useContext(AppContext);
}
