import Image from "next/image";
import React, { Fragment } from "react";
import RatingSVG from "../SVGs/RatingSVG";
import Link from "next/link";
import { getCategoryById } from "@/utils";

const SuperDeliciousItem = ({ recipe }) => {
  const { title, thumbnail, cooking_time, rating, category_id } = recipe || {};
  const imagePath = `/assets/thumbs/${thumbnail}`;

  const categoryName = getCategoryById(category_id)?.name;

  let ratings = [];
  for (let index = 0; index < Math.round(rating?.average_rating); index++) {
    ratings?.push(<RatingSVG />);
  }
  return (
    <Link href={`/${categoryName}/${title?.split(" ").join("_")}`}>
      <Image
        src={imagePath}
        alt={title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
        height={1000}
        width={1000}
      />

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-yellow-500 mb-2">
        {ratings?.map((r, index) => (
          <Fragment key={index}>{r}</Fragment>
        ))}
      </div>
      <p className="text-gray-600">{cooking_time}</p>
    </Link>
  );
};

export default SuperDeliciousItem;
