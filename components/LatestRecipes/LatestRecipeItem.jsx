import { getCategoryById } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestRecipeItem = ({ recipe }) => {
  const { thumbnail, title, category_id } = recipe || {};

  const categoryName = getCategoryById(category_id)?.name;

  const imagePath = `/assets/thumbs/${thumbnail}`;
  return (
    <Link href={`/${categoryName}/${title?.split(" ").join("_")}`}>
      <Image
        alt={title}
        src={imagePath}
        height={1000}
        width={1000}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{categoryName}</p>
    </Link>
  );
};

export default LatestRecipeItem;
