"use client";
import type { HomeProps } from "../../types";
import { DateInput } from "./DateInput";
import { useFormState } from "../../context/FormContext";
import { GuestsSelect } from "./GuestsSelect";

export default function Inputs({ home }: HomeProps) {
  const { formData } = useFormState();

  return (
    <div className="flex flex-col items-center justify-center w-screen sm:flex-row p-2 font-semibold text-xs">
      <DateInput value={formData.dateRange} placeholder={home.select} />

      <GuestsSelect defaultValue={formData.guests} guests={home.guests} />
    </div>
  );
}
