"use client";
import { createContext, useContext, useState } from "react";
import type { IFormData, IChildren, IFormContext } from "../types";

const initialData = {
  dateRange: {
    start: "",
    end: "",
  },
  guests: "",
};

const FormContext = createContext<IFormContext>({
  formData: initialData,
  setFormData: (): void => {
    // now it's not empty
  },
});

export const FormProvider = ({ children }: IChildren) => {
  const [formData, setFormData] = useState<IFormData>(initialData);

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};

export default FormContext;

export function useFormState() {
  return useContext(FormContext);
}
