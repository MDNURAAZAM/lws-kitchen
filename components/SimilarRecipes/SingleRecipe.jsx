import Image from "next/image";
import React from "react";

const SingleRecipe = ({ recipe }) => {
  const { thumbnail, title } = recipe || {};
  const imagePath = `/assets/thumbs/${thumbnail}`;
  return (
    <div>
      <Image
        alt={title}
        src={imagePath}
        height={200}
        width={200}
        className="w-full h-60 object-cover rounded-lg mb-2"
      />

      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default SingleRecipe;
