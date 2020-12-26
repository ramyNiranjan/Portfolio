import React from "react";
import Image from "next/image";

interface ScrollerProps {
  url: string;
  iconTitle?: string;
}

export const Scroller: React.FC<ScrollerProps> = ({ url, iconTitle }) => {
  return (
    <div className="relative w-10 h-10 ml-8 transform md:w-12 md:h-12 hover:scale-105 trans-ease-out lg:w-16 lg:h-16 md:ml:0">
      <Image
        className="absolute inset-0 w-full h-full text-gray-500 hover:filter-none filter-grayscale"
        src={`http:${url}`}
        alt={iconTitle}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Scroller;
