import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const charge_id = searchParams.get("charge_id");

  const response = await axios.get(
    `${process.env.BASE_PAGARME_URL_API}/charges/${charge_id}`,
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
