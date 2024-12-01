import { getHandPickedRecipes } from "@/utils";
import React from "react";
import HandPickedItem from "./HandPickedItem";

const HandPicked = () => {
  const handPickedRecipes = getHandPickedRecipes();

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {handPickedRecipes?.map((recipe) => (
          <HandPickedItem key={recipe?.title} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default HandPicked;
