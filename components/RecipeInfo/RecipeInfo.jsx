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
        className="w-full h-auto mb-8 rounded-lg"
        alt={title}
        width={200}
        height={200}
      />

      <p className="text-gray-600 mb-8">{description}</p>
    </article>
  );
};

export default RecipeInfo;
