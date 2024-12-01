import { getSuperDeliciousRecipes } from "@/utils";
import SuperDeliciousItem from "./SuperDeliciousItem";

const SuperDelicious = () => {
  const recipes = getSuperDeliciousRecipes();

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {recipes?.map((recipe) => (
          <SuperDeliciousItem key={recipe?.title} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
