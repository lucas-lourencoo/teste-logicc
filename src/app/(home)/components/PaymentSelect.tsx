import Image from "next/image";

export function PaymentSelect() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-between w-full">
      <label
        htmlFor="payment"
        className="flex items-center justify-center h-12 rounded-lg bg-blue-900 text-sm text-zinc-50 font-semibold cursor-pointer active:bg-blue-800"
      >
        <Image
          src="/logo-pix.png"
          alt="Logo Pix"
          width={20}
          height={23}
          className="mr-1"
        />
        Pix
      </label>

      <label
        htmlFor="payment"
        className="flex items-center justify-center h-12 rounded-lg bg-zinc-200 text-sm font-semibold opacity-25 cursor-not-allowed"
      >
        Cartão de Crédito
      </label>

      <label
        htmlFor="payment"
        className="flex items-center justify-center h-12 rounded-lg bg-zinc-200 text-sm font-semibold opacity-25 cursor-not-allowed"
      >
        Boleto
      </label>
    </div>
  );
}
