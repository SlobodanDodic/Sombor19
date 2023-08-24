"use client";
import { createContext, useContext, useState } from "react";
import type { AllFormDataProps, ChildrenProps, FormContextType } from "../types";

const initialData = {
  dateRange: {
    start: "",
    end: "",
  },
  guests: "",
};

const FormContext = createContext<FormContextType>({
  formData: initialData,
  setFormData: (): void => {
    // now it's not empty
  },
});

export const FormProvider = ({ children }: ChildrenProps) => {
  const [formData, setFormData] = useState<AllFormDataProps>(initialData);

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};

export default FormContext;

export function useFormState() {
  return useContext(FormContext);
}
