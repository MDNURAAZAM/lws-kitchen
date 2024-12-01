"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomLink = ({ pathName, children }) => {
  const path = usePathname();
  const isActive = path === pathName;
  return (
    <Link
      href={pathName}
      className={`hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
