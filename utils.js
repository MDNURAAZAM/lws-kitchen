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

export const formatDate = (value) => {
  const date = new Date(value);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export const getMostPopularRecipe = () => {
  return [...recipes]?.reduce(
    (maxRated, current) =>
      current?.rating?.average_rating > (maxRated?.rating?.average_rating || 0)
        ? current
        : maxRated,
    {}
  );
};

export const getSuperDeliciousRecipes = () => {
  const superDeliciousRecipes = [...recipes]
    ?.sort((a, b) => b?.rating?.rating_count - a?.rating?.rating_count)
    .slice(0, 3);
  return [...superDeliciousRecipes];
};
