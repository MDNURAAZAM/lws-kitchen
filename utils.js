import categories from "./public/data/categories.json";

export const getCategoryById = (id) => {
  return categories?.filter((category) => category?.id == id)[0];
};
export const getCategoryByName = (name) => {
  return categories?.filter((category) => category?.name == name)[0];
};
