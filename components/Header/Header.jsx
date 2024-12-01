import React from "react";
import SearchSVG from "../SVGs/SearchSVG";
import Image from "next/image";
import logo from "@/public/assets/lws-kitchen.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <header className="w-full mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50 ">
      <nav className="flex justify-between items-center">
        <CustomLink pathName="/">
          <Image src={logo} height={100} width={100} alt="logo" />
        </CustomLink>
        <ul className="hidden md:flex space-x-6">
          <li>
            <CustomLink pathName="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink pathName="/category">Categories</CustomLink>
          </li>
          <li>
            <CustomLink pathName="/#latest-recipes">Latest Recipes</CustomLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-orange-500">
            <SearchSVG />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
