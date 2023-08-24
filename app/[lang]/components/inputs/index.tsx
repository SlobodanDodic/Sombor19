"use client";
import type { HomeProps } from "../../types";
import { useFormState } from "../../context/FormContext";
import { GuestsSelect } from "./GuestsSelect";
import { DateRange } from "./DateRange";

export default function Inputs({ home }: HomeProps) {
  const { formData } = useFormState();

  return (
    <div className="flex flex-col items-center justify-center w-screen sm:flex-row my-2 font-semibold text-xs">
      <DateRange value={formData.dateRange} placeholder={home.select} />

      <GuestsSelect defaultValue={formData.guests} guests={home.guests} />
    </div>
  );
}
