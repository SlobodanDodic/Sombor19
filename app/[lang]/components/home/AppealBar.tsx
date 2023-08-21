"use client";
import type { AllFormDataProps, AppealBarProps } from "../../types";
import { useFormState } from "../../context/FormContext";
import { DateInput } from "../contact/DateInput";
import { GuestsSelect } from "../contact/GuestsSelect";
import Link from "next/link";

export function AppealBar({ home, lang }: AppealBarProps) {
  const { formData } = useFormState();

  return (
    <div className="absolute top-[60vh] left-1/2 transform -translate-x-1/2 text-xs">
      <div className="flex flex-col items-center">
        <div className="text-center px-2 pb-2">
          <h1 className="flex text-white/90 pl-1">{home.visit}</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-screen sm:flex-row px-2 font-semibold">
          <DateInput value={formData.dateRange} placeholder={home.select} />

          <GuestsSelect defaultValue={formData.guests} guests={home.guests} />

          <Link
            href={`/${lang}/contact`}
            className="flex w-[200px] h-7 sm:w-[75px] rounded border-0 items-center justify-center text-white/90 ring-2 ring-white/70 m-1 bg-amber-600/60"
          >
            {home.submit}
          </Link>
        </div>
      </div>
    </div>
  );
}
