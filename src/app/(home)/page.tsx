"use client";

import { HelpSection } from "@/app/(home)/components/HelpSection";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/app/(home)/components/Form";
import { useMutation } from "@tanstack/react-query";
import { createRequest } from "@/services/create";
import { PaymentSelect } from "./components/PaymentSelect";
import { Button } from "@/components/ui/Button";
import { FormHeader } from "./components/FormHeader";
import { Box } from "@/components/ui/Box";
import { Footer } from "@/components/ui/Footer";

const schema = z.object({
  name: z.string({
    required_error: "Nome é obrigatório",
  }),
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Digite um email válido"),
  phone: z.string({
    required_error: "Telefone é obrigatório",
  }),
  cep: z
    .string({
      required_error: "CEP é obrigatório",
    })
    .transform((value) => Number(value.replace("-", ""))),
  address: z.string({
    required_error: "Endereço é obrigatório",
  }),
  complement: z.string().optional(),
  number: z
    .string({
      required_error: "Número é obrigatório",
    })
    .transform((value) => Number(value)),
  neighborhood: z.string({
    required_error: "Bairro é obrigatório",
  }),
  city: z.string({
    required_error: "Cidade é obrigatória",
  }),
  state: z
    .string({
      required_error: "Selecione seu estado",
    })
    .transform((value) => Number(value)),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationKey: ["createRequestMutation"],
    mutationFn: createRequest,
  });

  function onSubmit(data: FormData) {
    mutation.mutate({
      customer: {
        name: data.name,
        email: data.email,
        address: {
          line_1: data.address,
          line_2: data.neighborhood,
          city: data.city,
          state: data.state,
          zip_code: data.cep,
          country: "BR",
        },
      },
      items: [
        {
          amount: 1,
          quantity: 1,
          code: "produto_teste",
          description: "Produto teste",
        },
      ],
    });
  }

  return (
    <main className="w-full h-full bg-zinc-100 flex items-center justify-center flex-col">
      <Box>
        <Image
          src="/banner.png"
          alt="Banner monetize"
          quality={100}
          width={992}
          height={259}
        />

        <HelpSection />

        <section className="grid grid-cols-2 gap-6 w-full">
          <div className="w-full border rounded-md border-zinc-200 bg-zinc-50">
            <FormHeader
              number={1}
              title="Dados cadastrais"
              subtitle="Complete os dados de cadastro"
            />

            <Form control={control} errors={errors} />
          </div>

          <div className="w-full border rounded-md border-zinc-200 bg-zinc-50">
            <FormHeader
              number={2}
              title="Dados de pagamento"
              subtitle="Complete os dados de pagamento"
            />

            <div className="flex align-center justify-center flex-col p-5">
              <PaymentSelect />

              <div className="flex items-center justify-center my-4">
                <Image
                  src="/qr-code.png"
                  alt="QR code fake"
                  width={250}
                  height={250}
                />
              </div>

              <Button
                onClick={handleSubmit(onSubmit)}
                isDisabled={mutation.isPending}
              >
                Comprar agora
              </Button>

              <span className="text-xs font-light text-center my-4">
                Ambiente criptografado e 100% seguro.
              </span>

              <div className="flex items-center justify-center gap-6">
                <Image
                  src="/compra-segura.png"
                  alt="Compra 100% segura"
                  width={147}
                  height={64}
                />
                <Image
                  src="/dados-protegidos.png"
                  alt="Dados pessoais protegidos"
                  width={147}
                  height={64}
                />
              </div>
            </div>
          </div>
        </section>
      </Box>

      <Footer />
    </main>
  );
}
