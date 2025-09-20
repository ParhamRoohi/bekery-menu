import { createClient } from "@sanity/client";
import { Product } from "../types";

const client = createClient({
  projectId: "gw9pds6y",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const PRODUCT_QUERY = `*[_type == "product"]{productId, title, productImage, description, category, price}`;

export async function fetchMenuProducts(): Promise<Product[]> {
  return client.fetch(PRODUCT_QUERY);
}
