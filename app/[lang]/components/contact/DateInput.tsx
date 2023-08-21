import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import type { AllFormDataProps } from "../../types";
import { useFormState } from "../../context/FormContext";

interface DatePickerInputProps {
  value: DateValueType;
  placeholder: string;
}

export function DateInput({ value, placeholder }: DatePickerInputProps) {
  const { setFormData } = useFormState();

  const handleValueChange = (newValue: DateValueType) => {
    setFormData((prevFormData: AllFormDataProps) => ({
      ...prevFormData,
      dateRange: newValue,
    }));
  };

  return (
    <Datepicker
      placeholder={placeholder}
      useRange={false}
      primaryColor={"amber"}
      displayFormat={"DD.MM.YYYY"}
      value={value}
      onChange={handleValueChange}
      containerClassName="relative flex"
      inputClassName="flex w-[200px] h-7 bg-amber-600/60 text-center rounded border-0 text-white/90 ring-2 m-1 ring-white/70 placeholder:text-white/90"
      toggleClassName="absolute text-transparent left-0 h-full w-full"
    />
  );
}
