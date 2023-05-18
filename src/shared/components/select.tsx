import { ChangeEventHandler } from "react";

type Option = {
  value: string;
  label: string;
};

export const Select = ({
  options,
  value,
  onChange,
  label,
}: {
  options: Option[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  label: string;
}) => {
  return (
    <>
      {label && <label>{label}</label>}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
