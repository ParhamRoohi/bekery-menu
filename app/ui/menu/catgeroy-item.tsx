interface CategoryItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryItem({
  title,
  isActive,
  onClick,
  ...props
}: CategoryItemProps & React.HTMLAttributes<HTMLLIElement>) {
  const activeClasses = isActive ? "bg-[#49101a] text-white" : "text-[#49101a]";

  return (
    <li {...props} onClick={onClick} className="cursor-pointer">
      <span
        className={`text-nowrap  my-2 text-sm font-normal rounded-[49px] px-3 py-2 ${activeClasses}`}
      >
        {title}
      </span>
    </li>
  );
}
