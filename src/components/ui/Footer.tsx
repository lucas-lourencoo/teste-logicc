import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-6 bg-zinc-200 w-full">
      <Image
        src="/garanty.png"
        alt="30 dias de garantia"
        width={112}
        height={61}
      />
    </footer>
  );
}
