import { getPopularCategories } from "@/utils";
import Link from "next/link";
import React from "react";
import PopularItem from "./PopularItem";

const PopularCategories = () => {
  const popularCategories = getPopularCategories();
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/category" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
        {popularCategories?.map((category) => (
          <Link key={category?.id} href={`/${category?.name}`}>
            <PopularItem category={category} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
