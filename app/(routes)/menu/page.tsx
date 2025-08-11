"use client";
import { useState, useEffect, useRef } from "react";
import { products } from "../../data/mock-products";
import CategoryBar from "@/app/ui/menu/category-bar";
import ProductCard from "@/app/ui/menu/product-card";
import { useCart } from "../../context/cart-context";
import Link from "next/link";

export default function MenuPage() {
  const { cart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.Category.CategoryFA;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const categories = Object.keys(groupedProducts);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: [0.3], rootMargin: "-50px 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pb-20">
      <div className="sticky top-0 bg-[#F9F3F4] z-10 bg- shadow-sm">
        <div className="relative flex flex-row items-center justify-center mx-auto w-full py-11">
          <h2 className="text-stone-600 text-center text-3xl font-bold font-[Playfair_Display]">
            Crust
          </h2>
          <div className="absolute left-6">
            <Link href="/cart" className="relative inline-block">
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
              <span className="absolute -top-2 -right-2 bg-[#cd4444] rounded-full text-white w-5 h-5 flex items-center justify-center text-xs">
                <span className="leading-none">
                  {totalCartQuantity.toLocaleString("fa-IR")}
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <CategoryBar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={(category) => {
              setActiveCategory(category);
              const section = sectionRefs.current[category];
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
        </div>
      </div>

      {categories.map((category) => (
        <section
          key={category}
          id={category}
          ref={(el) => {
            sectionRefs.current[category] = el;
          }}
          className="px-4 pt-4"
        >
          <h2 className="text-stone-600 text-xl font-bold mb-2 px-2">
            {category}
          </h2>
          <div className="flex flex-col gap-3">
            {groupedProducts[category].map((product) => (
              <ProductCard
                key={product.ProductID}
                id={product.ProductID}
                title={product.Title}
                curPrice={product.Price.CurrentPrice}
                prevPrice={product.Price.PrevPrice}
                image={product.ProductImage}
                description={product.Description}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
