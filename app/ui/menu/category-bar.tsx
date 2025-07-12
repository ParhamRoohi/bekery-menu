import { useState, useEffect, useRef } from "react";
import CategoryItem from "./catgeroy-item";

export default function CategoryBar({ categories }: { categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const containerRef = useRef<HTMLUListElement>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Scroll detection logic would go here
      // Would need product section refs to implement properly
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full overflow-x-scroll"
      style={{ scrollbarWidth: "thin" }}
    >
      <ul ref={containerRef} className="flex flex-row px-5 py-4 gap-3 w-fit">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category}
            isActive={activeCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </ul>
    </section>
  );
}
