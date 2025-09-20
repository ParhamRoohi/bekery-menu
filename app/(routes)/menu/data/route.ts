import { NextResponse } from "next/server";
import { fetchMenuProducts } from "./fetch-menu-products";

export async function GET() {
  try {
    const products = await fetchMenuProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to load menu items", error);
    return NextResponse.json({ error: "Failed to load menu items" }, { status: 500 });
  }
}
