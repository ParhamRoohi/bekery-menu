import { createClient } from "@sanity/client";
import { Product } from "../productlist/types";

const client = createClient({
  projectId: "gw9pds6y",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const PRODUCT_QUERY = `*[_type == "product" && isEnabled == true]{productId, title, productImage, description, category, price, isEnabled}`;

export async function fetchMenuProducts(): Promise<Product[]> {
  return client.fetch(PRODUCT_QUERY, {}, { cache: "no-store" });
}
