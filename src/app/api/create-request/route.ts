import axios from "axios";

export async function POST(request: Request) {
  const requestBody = await request.json();

  const response = await axios.post(
    process.env.BASE_PAGARME_URL_API + "/orders",
    {
      ...requestBody,
      payments: [
        {
          payment_method: "pix",
          pix: {
            expires_in: 300,
          },
        },
      ],
    },
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(process.env.SECRET_API_KEY + ":").toString("base64"),
      },
    }
  );

  return Response.json(response.data);
}
