// /Users/parham/Desktop/bekery-menu/app/ui/menu/category-bar.tsx

import { useEffect, useRef } from "react";
import CategoryItem from "./catgeroy-item";

export default function CategoryBar({
  categories,
  activeCategory,
  onCategoryClick,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}) {
  const containerRef = useRef<HTMLUListElement>(null);

  const handleCategoryClick = (category: string) => {
    onCategoryClick(category);
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeItem = container.querySelector(
      `[data-category="${activeCategory}"]`
    );
    if (activeItem) {
      const containerWidth = container.offsetWidth;
      const itemLeft = (activeItem as HTMLElement).offsetLeft;
      const itemWidth = (activeItem as HTMLElement).offsetWidth;

      container.scrollTo({
        left: itemLeft - containerWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  return (
    <section
      className="w-full overflow-x-scroll sticky top-0 z-10 shadow-sm"
      style={{ scrollbarWidth: "thin" }}
    >
      <ul ref={containerRef} className="flex flex-row px-5 py-4 gap-3 w-fit">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            title={category}
            isActive={activeCategory === category}
            onClick={() => handleCategoryClick(category)}
            data-category={category}
          />
        ))}
      </ul>
    </section>
  );
}
