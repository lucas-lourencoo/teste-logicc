import Image from "next/image";

export function HelpSection() {
  return (
    <section className="flex flex-col w-full p-4 bg-zinc-50 border rounded-md border-zinc-200">
      <span className="flex items-center text-sm font-semibold text-zinc-700">
        <Image
          src="/email-icon.png"
          alt="Ícone de email"
          width={18}
          height={16}
          className="mr-1"
        />
        Suporte
      </span>
      <p className="text-sm text-zinc-500">encapsulado@gmail.com</p>
    </section>
  );
}
