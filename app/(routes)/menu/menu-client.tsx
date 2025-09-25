"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryBar from "../../ui/menu/category-bar";
import ProductCard from "../../ui/menu/product-card";
import { useCart } from "../../context/cart-context";
import { Product } from "./types";

const CATEGORY_ORDER = [
  "نوشیدنی گرم",
  "نوشیدنی سرد",
  "لایه ای",
  "کوکی و کیک",
  "صبحانه و میان وعده",
  "نان",
  "دمنوش بار",
  "تاپینگ",
];

// comment
function getSanityImageUrl(ref: string) {
  if (!ref || typeof ref !== "string" || !ref.startsWith("image-")) {
    return "/images/placeholder.png";
  }

  const parts = ref.split("-");
  if (parts.length < 4) {
    return "/images/placeholder.png";
  }

  return `https://cdn.sanity.io/images/gw9pds6y/production/${parts[1]}-${parts[2]}.${parts[3]}`;
}

interface MenuClientProps {
  products: Product[];
}

export default function MenuClient({ products }: MenuClientProps) {
  const { cart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const stickyHeaderRef = useRef<HTMLDivElement | null>(null);

  const groupedProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      const category = product.category.categoryFA.trim();
      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    }, {} as Record<string, Product[]>);
  }, [products]);

  const categories = useMemo(() => {
    return Object.keys(groupedProducts).sort((a, b) => {
      const indexA = CATEGORY_ORDER.indexOf(a);
      const indexB = CATEGORY_ORDER.indexOf(b);

      if (indexA === -1 && indexB === -1) {
        return a.localeCompare(b, "fa");
      }

      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  }, [groupedProducts]);

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
      { threshold: [0.3], rootMargin: "-50px 0px 0px 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [categories]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const section = sectionRefs.current[category];
    if (!section) return;

    const headerHeight = stickyHeaderRef.current?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetTop = Math.max(sectionTop - headerHeight - 16, 0);

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="relative pb-20">
      <div
        ref={stickyHeaderRef}
        className="sticky top-0 bg-[#F9F3F4] z-10 shadow-sm"
      >
        <div className="relative flex flex-row items-center justify-center mx-auto w-full py-10">
          <Image
            className="w-32"
            src={"/images/logo 3.svg"}
            width={100}
            height={100}
            alt="Menu page logo"
          />
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
            onCategoryClick={handleCategoryClick}
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
          className="px-4 pt-8 scroll-mt-[160px]"
        >
          <h2 className="text-stone-600 text-xl font-bold mb-2 px-2">
            {category}
          </h2>
          <div className="flex flex-col gap-3">
            {groupedProducts[category].map((product) => (
              <ProductCard
                key={product.productId}
                id={product.productId}
                title={product.title}
                curPrice={product.price.currentPrice}
                image={getSanityImageUrl(product.productImage.asset._ref)}
                description={product.description}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
