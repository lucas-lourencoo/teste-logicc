import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="flex flex-col pt-6 pb-12 space-y-5 items-center justify-center w-full max-w-[992px]">
      {children}
    </div>
  );
}
