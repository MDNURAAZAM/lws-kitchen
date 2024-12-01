import Image from "next/image";
import React from "react";

const PopularItem = ({ category }) => {
  const { name, image } = category || {};
  const imagePath = `/assets${image}`;
  return (
    <div className="cursor-pointer text-center group">
      <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
        <Image
          src={imagePath}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="transition-transform duration-300 group-hover:scale-105">
        {name}
      </p>
    </div>
  );
};

export default PopularItem;
