import Image from "next/image";
import SaveSVG from "../SVGs/SaveSVG";
import ShareSVG from "../SVGs/ShareSVG";

const RecipeInfo = ({ recipe }) => {
  const {
    title,
    description,
    published_date,
    cooking_time,
    author,
    thumbnail,
  } = recipe || {};

  const imagePath = `/assets/thumbs/${thumbnail}`;
  return (
    <article>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src={"/assets/avater.png"}
          alt={author}
          className="w-8 h-8 rounded-full"
          height={50}
          width={50}
        />

        <span className="text-gray-600">{author}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{cooking_time}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{published_date}</span>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <ShareSVG />
            Share
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <SaveSVG />
            Save
          </button>
        </div>
      </div>
      <Image
        src={imagePath}
        className="w-full h-[800px] mb-8 rounded-lg"
        alt={title}
        width={500}
        height={500}
      />

      <p className="text-gray-600 mb-8">{description}</p>
      <h2 class="text-3xl font-bold mb-4">Before you begin</h2>
      <p class="mb-8">
        Food qualities braise chicken cuts bowl through slices butternut snack.
        Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw
        soften fruit. sweet renders bone-in marrow richness kitchen, fricassee
        basted putter.
      </p>

      <h2 class="text-3xl font-bold mb-4">Here are the basics</h2>
      <p class="mb-8">
        Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce
        burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>

      <blockquote class="text-3xl font-bold italic text-center my-12 px-4">
        One cannot think well, love well, sleep well, if one has not dined well.
      </blockquote>
      <p class="text-center text-gray-600 mb-12">
        — Virginia Woolf, A Room of One Own
      </p>

      <h2 class="text-3xl font-bold mb-4">In the kitchen</h2>
      <p class="mb-8">
        Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious
        romantic undisturbed raw platter will meld. Thick Skewers skillet
        natural, smoker soy sauce wait roux. slices rosette bone-in simmer.
        Romantic fall-off-the-bone butternut chuck under romas, Skewers on
        culinary experience.
      </p>

      <Image
        src="/assets/thumbs/thumb-15.jpg"
        alt="Cooking in kitchen"
        class="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
        width={50}
        height={50}
      />

      <p class="mb-8">
        Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce
        burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>
    </article>
  );
};

export default RecipeInfo;
