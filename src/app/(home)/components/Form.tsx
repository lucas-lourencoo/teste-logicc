import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputControl } from "../../../components/ui/Input";
import states from "@/constants/states.json";

interface FormProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

export function Form({ control, errors }: FormProps) {
  return (
    <form action="" className="p-5 space-y-4">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <InputControl
            label="Nome completo"
            placeholder="Seu nome completo"
            name={field.name}
            error={!!errors.name}
            errorMessage={errors.name?.message?.toString()}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <InputControl
            label="E-mail"
            placeholder="Seu e-mail válido"
            error={!!errors.email}
            errorMessage={errors.email?.message?.toString()}
            name={field.name}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputControl
              label="Telefone"
              placeholder="00 0000 0000"
              error={!!errors.phone}
              errorMessage={errors.phone?.message?.toString()}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <InputControl
              label="CEP"
              placeholder="00-000-000"
              error={!!errors.cep}
              errorMessage={errors.cep?.message?.toString()}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </div>

      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <InputControl
            label="Endereço"
            placeholder="Digite o endereço"
            error={!!errors.address}
            errorMessage={errors.address?.message?.toString()}
            name={field.name}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="complement"
          control={control}
          render={({ field }) => (
            <InputControl
              label="Complemento"
              placeholder="00 0000 0000"
              error={!!errors.complement}
              errorMessage={errors.complement?.message?.toString()}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <InputControl
              label="Número"
              placeholder="00-000-000"
              error={!!errors.number}
              errorMessage={errors.number?.message?.toString()}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      </div>

      <Controller
        name="neighborhood"
        control={control}
        render={({ field }) => (
          <InputControl
            label="Bairro"
            placeholder="Digite seu bairro"
            error={!!errors.neighborhood}
            errorMessage={errors.neighborhood?.message?.toString()}
            name={field.name}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <InputControl
              label="Cidade"
              placeholder="Digite sua cidade"
              error={!!errors.city}
              errorMessage={errors.city?.message?.toString()}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-1">
              <label className="font-semibold">Estado</label>

              <select
                value={field.value}
                name={field.value}
                onChange={field.onChange}
                className="border rounded-md p-2 text-sm border-zinc-200 placeholder:text-zinc-400"
              >
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.nome}
                  </option>
                ))}
              </select>

              {errors.state && (
                <span className="text-red-500 text-xs">
                  {errors.state?.message?.toString()}
                </span>
              )}
            </div>
          )}
        />
      </div>
    </form>
  );
}
