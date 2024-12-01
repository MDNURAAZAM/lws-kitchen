import RecipeInfo from "@/components/RecipeInfo/RecipeInfo";
import SimilarRecipes from "@/components/SimilarRecipes/SimilarRecipes";
import recipes from "@/public/data/recipes.json";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    recipeTitle: recipe?.title?.split(" ").join("_"),
  }));
}

const RecipeDetailsPage = ({ params }) => {
  const { recipeTitle } = params || {};

  const recipe = recipes?.find(
    (r) => r.title === recipeTitle.split("_").join(" ")
  );

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <RecipeInfo recipe={recipe} />

      <SimilarRecipes
        categoryId={recipe?.category_id}
        currentRecipe={recipe?.title}
      />
    </main>
  );
};

export default RecipeDetailsPage;
