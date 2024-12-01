import Image from "next/image";

const RecipeItem = ({ recipe }) => {
  const { thumbnail, title } = recipe || {};
  const imagePath = `/assets/thumbs/${thumbnail}`;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
      <Image
        alt={title}
        src={imagePath}
        height={200}
        width={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default RecipeItem;
