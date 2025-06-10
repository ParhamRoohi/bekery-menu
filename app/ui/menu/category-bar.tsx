import CategoryItem from "./catgeroy-item";

export default function CategoryBar({ categories }: { categories: string[] }) {
  return (
    <section className="w-full overflow-x-scroll">
      <ul className="flex flex-row-reverse px-5 py-4 gap-3 w-fit overflow-x-scroll">
        {categories.map((category, index) => (
          <CategoryItem key={index} title={category} />
        ))}
      </ul>
    </section>
  );
}
