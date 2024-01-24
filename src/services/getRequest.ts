import { api } from "@/lib/axios";

interface GetChargeProps {
  charge_id: string;
}

export async function getRequest({ charge_id }: GetChargeProps) {
  const response = await api.get(`/get-request/${charge_id}`);

  const dataResponse = await response.data;

  return dataResponse;
}
