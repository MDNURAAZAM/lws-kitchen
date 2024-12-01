"use client";
import { getCategoryById } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HandPickedItem = ({ recipe }) => {
  const { thumbnail, title, category_id } = recipe || {};

  const categoryName = getCategoryById(category_id)?.name;

  const imagePath = `/assets/thumbs/${thumbnail}`;

  const router = useRouter();
  const handleCollectionClick = (e) => {
    e.stopPropagation();
    router.push(`/${categoryName}`);
  };

  const handleRecipeClick = (e) => {
    e.stopPropagation();
    router.push(`/${categoryName}/${title?.split(" ").join("_")}`);
  };
  return (
    <div
      onClick={handleRecipeClick}
      className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
    >
      <Image
        alt={title}
        src={imagePath}
        height={1000}
        width={1000}
        className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <button
          type="button"
          onClick={handleCollectionClick}
          className="text-orange-300 hover:underline"
        >
          View Collection
        </button>
      </div>
    </div>
  );
};

export default HandPickedItem;
