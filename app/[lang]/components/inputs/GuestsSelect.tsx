import type { IFormData } from "../../types";
import { useFormState } from "../../context/FormContext";

interface GuestsSelectProps {
  defaultValue: string;
  guests: string;
}

export function GuestsSelect({ defaultValue, guests }: GuestsSelectProps) {
  const { setFormData } = useFormState();

  const maxGuests = 12;

  const options = Array.from({ length: maxGuests + 1 }, (_, index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ));

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setFormData((prevFormData: IFormData) => ({
      ...prevFormData,
      guests: e.target.value,
    }));
  };

  return (
    <select
      id="guests"
      className="mx-auto w-[200px] h-7 sm:w-[100px] bg-amber-600 uppercase font-bold tracking-[1px] rounded border-0 text-white ring-2 ring-white/70 placeholder:text-white/90"
      defaultValue={defaultValue}
      onChange={handleInputChange}
    >
      <option value="0">{guests}</option>
      {options}
    </select>
  );
}
