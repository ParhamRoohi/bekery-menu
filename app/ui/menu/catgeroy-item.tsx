import React from "react";

interface CategoryItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryItem({
  title,
  isActive,
  onClick,
}: CategoryItemProps) {
  const activeClasses = isActive ? "bg-[#5C4033] text-white" : "text-zinc-800";

  return (
    <li onClick={onClick} className="cursor-pointer">
      <span
        className={`text-nowrap mx-3 my-2 text-sm font-normal rounded-[49px] px-3 py-2 ${activeClasses}`}
      >
        {title}
      </span>
    </li>
  );
}
