import CategoryItem from "@/components/CategoryItem/CategoryItem";
import categories from "../../public/data/categories.json";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <CategoryItem category={category} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
