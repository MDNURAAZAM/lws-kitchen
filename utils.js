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
    ?.sort((a, b) => b?.rating?.average_rating - a?.rating?.average_rating)
    .slice(0, 3);
  return [...superDeliciousRecipes];
};

export const getPopularCategories = () => {
  const categoriesCount = {};
  categories.map((catgeory) => (categoriesCount[catgeory?.id] = 0));
  recipes?.map((recipe) => categoriesCount[recipe?.category_id]++);

  const popularIds = [...Object.entries(categoriesCount)]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map((p) => p[0]);

  const popularCategories = categories?.filter((category) =>
    popularIds.includes(category?.id)
  );
  return [...popularCategories];
};

export const getRandomIndexRecipe = () => {
  return Math.floor(Math.random() * recipes?.length);
};

export const getHandPickedRecipes = () => {
  return [recipes[getRandomIndexRecipe()], recipes[getRandomIndexRecipe()]];
};

export const getLatestRecipes = () => {
  const sortedByDateDesc = [...recipes]?.sort(
    (a, b) => new Date(b?.published_date) - new Date(a?.published_date)
  );
  return sortedByDateDesc.slice(0, 4);
};
