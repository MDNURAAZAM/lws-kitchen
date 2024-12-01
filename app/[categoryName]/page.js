import RecipeItem from "@/components/RecipeItem/RecipeItem";
import recipes from "@/public/data/recipes.json";
import categories from "@/public/data/categories.json";
import Link from "next/link";

export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryName: category?.name,
  }));
}

const RecipePage = ({ params }) => {
  const { categoryName } = params || {};

  const category = categories?.find(
    (category) => category?.name === categoryName
  );

  const clickedRecipes = recipes.filter(
    (recipe) => recipe?.category_id === category?.id
  );
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {category?.name}{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({clickedRecipes?.length}{" "}
              {`Recipe${clickedRecipes?.length > 1 ? "s" : ""}`})
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clickedRecipes?.map((recipe) => (
          <Link
            key={recipe.title}
            href={`/${categoryName}/${recipe?.title?.split(" ").join("_")}`}
          >
            <RecipeItem recipe={recipe} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default RecipePage;
