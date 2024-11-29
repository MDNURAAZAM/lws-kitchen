import HandPicked from "@/components/HandPicked/HandPicked";
import Hero from "@/components/Hero/Hero";
import Inbox from "@/components/Inbox/Inbox";
import LatestRecipes from "@/components/LatestRecipes/LatestRecipes";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import SuperDelicious from "@/components/SuperDelicious/SuperDelicious";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero />
      <SuperDelicious />
      <PopularCategories />
      <Inbox />
      <HandPicked />
      <LatestRecipes />
    </main>
  );
}
