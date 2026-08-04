import { Suspense } from "react";
import MenuClient from "./menu-client";
import { fetchMenuProducts } from "../data/fetch-menu-products";
import { Product } from "./types";

async function MenuContent() {
  const products: Product[] = await fetchMenuProducts();
  return <MenuClient products={products} />;
}

function MenuSkeleton() {
  const categoryPlaceholders = Array.from({ length: 6 });
  const sectionPlaceholders = Array.from({ length: 4 });
  const productPlaceholders = Array.from({ length: 3 });

  return (
    <section className="relative pb-20">
      <div className="sticky top-0 bg-[#f6e7ce] z-10 shadow-sm">
        <div className="relative flex flex-row items-center justify-center mx-auto w-full py-10">
          <div className="w-32 h-12 rounded-2xl bg-[#f6dfb7] animate-pulse" />
          <div className="absolute left-6">
            <div className="w-7 h-8 rounded-full bg-[#f6dfb7] animate-pulse" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#cd4444] animate-pulse" />
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex gap-3 overflow-hidden">
            {categoryPlaceholders.map((_, index) => (
              <div
                key={`category-skeleton-${index}`}
                className="h-10 w-24 rounded-full bg-[#f6dfb7] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 pt-8 space-y-10">
        {sectionPlaceholders.map((_, sectionIndex) => (
          <div key={`section-skeleton-${sectionIndex}`} className="space-y-4">
            <div className="h-7 w-40 bg-[#f6dfb7] rounded-md animate-pulse" />
            <div className="flex flex-col gap-3">
              {productPlaceholders.map((_, productIndex) => (
                <div
                  key={`product-skeleton-${sectionIndex}-${productIndex}`}
                  className="flex gap-4 p-4 rounded-2xl bg-[#f9ebcf]"
                >
                  <div className="w-24 h-24 rounded-xl bg-[#f6dfb7] animate-pulse" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-1/2 bg-[#f6dfb7] rounded-md animate-pulse" />
                    <div className="h-4 w-full bg-[#f0d4a3] rounded-md animate-pulse" />
                    <div className="h-4 w-2/3 bg-[#f0d4a3] rounded-md animate-pulse" />
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="h-4 w-12 bg-[#f6dfb7] rounded-md animate-pulse" />
                    <div className="h-8 w-20 bg-[#f6dfb7] rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuSkeleton />}>
      <MenuContent />
    </Suspense>
  );
}
