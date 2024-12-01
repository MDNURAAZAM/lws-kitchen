import recipes from "@/public/data/recipes.json";
import SingleRecipe from "./SingleRecipe";
import { getCategoryById } from "@/utils";
import Link from "next/link";
const SimilarRecipes = ({ categoryId, currentRecipe }) => {
  const similarRecipes = recipes?.filter(
    (recipe) =>
      recipe?.category_id === categoryId && recipe?.title !== currentRecipe
  );

  const categoryName = getCategoryById(categoryId)?.name;

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {similarRecipes?.slice(0, 4)?.map((recipe) => (
          <Link
            key={recipe?.title}
            href={`/${categoryName}/${recipe?.title?.split(" ").join("_")}`}
          >
            <SingleRecipe recipe={recipe} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarRecipes;