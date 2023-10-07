import type { IFormData, IDateRange } from "../../types";
import { useFormState } from "../../context/FormContext";
import { DateObject } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/green.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

export function DateRange({ value, placeholder }: IDateRange) {
  const { setFormData } = useFormState();
  const placeValue = value?.start + " ~ " + value?.end;

  const handleValueChange = (newValue: DateObject[]) => {
    const [startDate, endDate] = newValue;
    const formattedStartDate = startDate.format("DD-MMM-YYYY");
    const formattedEndDate = endDate.format("DD-MMM-YYYY");

    setFormData((prevFormData: IFormData) => ({
      ...prevFormData,
      dateRange: {
        start: formattedStartDate,
        end: formattedEndDate,
      },
    }));
  };

  return (
    <DatePicker
      range
      id="dateRange"
      className="rmdp-mobile green bg-dark"
      format="dd-MMM-YYYY"
      inputClass="flex w-[200px] h-7 bg-amber-600 text-sm capitalize font-normal text-center font-bold items-center rounded border-0 text-white ring-2 sm:mr-2 mb-2 sm:mb-0 ring-white/70 placeholder:text-white hover:cursor-pointer"
      value={placeValue}
      placeholder={value?.start === "" ? placeholder : placeValue}
      onChange={handleValueChange}
    />
  );
}
