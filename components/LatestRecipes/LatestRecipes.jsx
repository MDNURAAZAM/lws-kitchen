import { getLatestRecipes } from "@/utils";
import React from "react";
import LatestRecipeItem from "./LatestRecipeItem";

const LatestRecipes = () => {
  const latestRecipes = getLatestRecipes();
  return (
    <section className="mb-16" id="latest-recipes">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes?.map((recipe) => (
          <LatestRecipeItem key={recipe?.title} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default LatestRecipes;
