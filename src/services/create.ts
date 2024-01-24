import { api } from "@/lib/axios";

interface CreateRequestData {
  customer: {
    name: string;
    email: string;
    address: {
      state: number;
      city: string;
      zip_code: number;
      line_1: string;
      line_2: string;
      country: string;
    };
  };
  items: {
    amount: number;
    quantity: number;
    code: string;
    description: string;
  }[];
}

export async function createRequest(data: CreateRequestData) {
  const response = await api.post("/create-request", data);

  const dataResponse = await response.data;

  return dataResponse;
}
