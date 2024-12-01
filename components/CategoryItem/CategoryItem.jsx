import Image from "next/image";

const CategoryItem = ({ category }) => {
  const { id, name, image } = category || {};
  const imagePath = `/assets${image}`;
  return (
    <div className="text-center">
      <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
        <Image
          height={1000}
          width={1000}
          src={imagePath}
          alt={name}
          className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
    </div>
  );
};

export default CategoryItem;
