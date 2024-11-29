import Link from "next/link";
import React from "react";

const CustomLink = ({ pathName, children }) => {
  return (
    <Link href={pathName} className="hover:text-orange-500">
      {children}
    </Link>
  );
};

export default CustomLink;
