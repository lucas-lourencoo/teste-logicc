import { InputHTMLAttributes } from "react";

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label: string;
  errorMessage: string | undefined;
  error: boolean;
}

export function InputControl({
  name,
  placeholder,
  label,
  errorMessage,
  error,
  ...rest
}: InputControlProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>

      {error ? (
        <input
          {...rest}
          placeholder={placeholder}
          className="border rounded-md p-2 text-sm border-red-500 placeholder:text-zinc-400"
        />
      ) : (
        <input
          {...rest}
          placeholder={placeholder}
          className="border rounded-md p-2 text-sm border-zinc-200 placeholder:text-zinc-400"
        />
      )}

      {error && <span className="text-red-500 text-xs">{errorMessage}</span>}
    </div>
  );
}
