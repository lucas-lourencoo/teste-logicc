import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-lg py-3 bg-green-500 text-zinc-50 font-semibold hover:bg-green-600 transition disabled:cursor-not-allowed disabled:opacity-65"
      {...rest}
    >
      {children}
    </button>
  );
}
