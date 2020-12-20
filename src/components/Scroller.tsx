import React from "react";
import Image from "next/image";

interface ScrollerProps {
  url: string;
  width: string;
  height: string;
}

export const Scroller: React.FC<ScrollerProps> = ({ url, width, height }) => {
  return (
    <div className="flex items-center justify-around w-1/2 ">
      {/* absolute inset-0 w-full h-full */}
      <div className="relative w-24 h-24 transform hover:scale-105 trans-ease-out">
        <Image
          className="absolute inset-0 w-full h-full mr-2 text-gray-500 hover:filter-none filter-grayscale"
          src={`http:${url}`}
          alt=""
          // unoptimized
          // width="2900"
          // height="2900"
          layout="fill"
          objectFit="contain"
          // minHeight={300}
          // minWidth={300}
          // layout="fixed"
        />
      </div>
    </div>
  );
};

export default Scroller;
