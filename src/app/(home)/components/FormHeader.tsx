interface FormHeaderProps {
  number: number;
  title: string;
  subtitle: string;
}

export function FormHeader({ number, title, subtitle }: FormHeaderProps) {
  return (
    <header className="flex items-center px-4 py-5 border-b border-zinc-200">
      <span className="flex items-center justify-center w-8 h-8 aspect-square text-xl leading-none rounded-full font-bold text-zinc-50 bg-blue-800">
        {number}
      </span>

      <div className="ml-4">
        <h2 className="text-xl font-bold text-zinc-600">{title}</h2>
        <p className="font-light text-sm mt-1">{subtitle}</p>
      </div>
    </header>
  );
}
