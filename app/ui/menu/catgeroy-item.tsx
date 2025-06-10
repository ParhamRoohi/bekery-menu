import React from "react";

export default function CategoryItem({ title }: { title: string }) {
  return (
    <li>
      <span className="text-nowrap mx-3 my-2 text-zinc-800 text-sm font-normal">
        {title}
      </span>
    </li>
  );
}
