import categories from "./public/data/categories.json";
import recipes from "./public/data/recipes.json";

export const getCategoryById = (id) => {
  return categories?.filter((category) => category?.id == id)[0];
};
export const getCategoryByName = (name) => {
  return categories?.filter((category) => category?.name == name)[0];
};

export const getPopularRecipes = (categoryId, currentRecipe) => {
  const similarRecipes = recipes?.filter(
    (recipe) =>
      recipe?.category_id === categoryId && recipe?.title !== currentRecipe
  );
  const popularRecipes = [...similarRecipes]
    ?.sort((a, b) => b?.rating?.average_rating - a?.rating?.average_rating)
    .slice(0, 4);
  return [...popularRecipes];
};
