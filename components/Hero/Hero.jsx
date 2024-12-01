import { getCategoryById, getMostPopularRecipe } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const recipe = getMostPopularRecipe();
  const { title, thumbnail, description, category_id } = recipe || {};
  const categoryName = getCategoryById(category_id)?.name;
  const imagePath = `/assets/thumbs/${thumbnail}`;
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={imagePath}
            alt={title}
            className="w-full h-[450px] object-cover rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link
            href={`/${categoryName}/${title?.split(" ").join("_")}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
