"use client";
import React from "react";
import CategoryBar from "@/app/ui/menu/category-bar";
import ProductCard from "@/app/ui/menu/product-card";
import { products } from "@/app/data/mock-products";
import Link from "next/link";
import { useCart } from "../../context/cart-context";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Menu() {
  const { cart } = useCart();
  const [, forceUpdate] = React.useState({});
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (selectedCategory) {
      currentParams.set("category", selectedCategory);
    } else {
      currentParams.delete("category");
    }
    router.push(`${pathname}?${currentParams.toString()}`);
  }, [selectedCategory, pathname, router, searchParams]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  React.useEffect(() => {
    forceUpdate({});
  }, []);
  const categorizedProducts = products.reduce((acc, product) => {
    const categoryKey = product.Category.CategoryFA;
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const categories = Object.keys(categorizedProducts);

  return (
    <main className="relative">
      <header className="sticky z-50 bg-[#FAF7F2] top-0 flex flex-col  py-10 justify-end gap-10 w-full">
        <div className="relative flex flex-row items-center justify-center mx-auto w-full">
          <h2 className="text-stone-600 text-center text-3xl font-bold font-['Playfair_Display']">
            Bake & Take
          </h2>
          <div className="absolute left-6">
            <Link href="/cart" className="relative">
              <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.864 1.28227L21.8308 4.28209M14.3645 1.1992L14.3312 4.19902M6.86491 1.11613L6.83168 4.11595M8.14884 20.6315L14.1485 20.698M8.23191 13.132L20.2312 13.2649M1.48232 13.0572C1.53715 8.10755 1.56456 5.6327 3.119 4.11233C4.67343 2.59195 7.14828 2.61936 12.098 2.67419L16.5977 2.72403C21.5474 2.77886 24.0222 2.80627 25.5426 4.36071C27.063 5.91514 27.0356 8.38999 26.9808 13.3397L26.8977 20.8392C26.8429 25.7889 26.8154 28.2638 25.261 29.7841C23.7066 31.3045 21.2317 31.2771 16.282 31.2223L11.7823 31.1724C6.83261 31.1176 4.35777 31.0902 2.83739 29.5358C1.31701 27.9813 1.34443 25.5065 1.39925 20.5568L1.48232 13.0572Z"
                  stroke="#795D4C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-1 -right-2 bg-[#D16060] rounded-[100px] text-black  w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
        <section>
          <CategoryBar categories={categories} />
        </section>
      </header>
      <section>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <div className="flex flex-row items-center gap-6 px-5 py-3">
              <hr className="border-b  w-full border-[#DAD2C94D]" />
              <h3 className="text-stone-700 text-xl font-semibold  whitespace-nowrap">
                {category}
              </h3>
              <hr className="border-b w-full border-[#DAD2C94D]" />
            </div>

            <section className="flex flex-col gap-4 px-5 py-3">
              {categorizedProducts[category].map((product) => (
                <ProductCard
                  key={product.ProductID}
                  id={product.ProductID}
                  title={product.Title}
                  description={product.Description}
                  image={product.ProductImage}
                  curPrice={product.Price.CurrentPrice}
                  prevPrice={product.Price.PrevPrice}
                  quantity={product.Quantity}
                />
              ))}
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}
