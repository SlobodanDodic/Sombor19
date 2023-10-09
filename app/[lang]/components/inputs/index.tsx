"use client";
import type { IHome } from "../../types";
import { useFormState } from "../../context/AppContext";
import { GuestsSelect } from "./GuestsSelect";
import { DateRange } from "./DateRange";

export default function Inputs({ home }: IHome) {
  const { formData } = useFormState();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-0 md:mr-2 font-semibold text-xs">
      <DateRange value={formData.dateRange} placeholder={home.query.select} />

      <GuestsSelect defaultValue={formData.guests} guests={home.query.guests} />
    </div>
  );
}
