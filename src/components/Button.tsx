import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps {
  textSize: string;
  value?: string;
  bgColor?: string;
  textColor: string;
  title: string;
  borderColor: string;
  padY?: string;
  variants?: {};
}

const Button: React.FC<ButtonProps> = ({
  textSize,
  bgColor,
  textColor,
  title,
  borderColor,
  variants,
  padY = "4",
}) => {
  const handleClick = () => {
    console.log("Free pizza!");
  };
  return (
    <motion.button
      className={classnames(
        `text-${textColor} font-semibold py-${padY} px-6 trans-ease-out tracking-wider mb-4 ml-4 `,
        bgColor ? `bg-${bgColor}` : "bg-transparent",
        `border rounded border-primary-300 focus:outline-none`,
        {
          "text-base": textSize === "sm",
          "text-xl": textSize === "lg",
          "text-2xl": textSize === "2xl",
        },
        ` hover:bg-primary-300   transform  active:scale-95 `
      )}
      onClick={handleClick}
      type="button"
      variants={variants}
    >
      {title}
    </motion.button>
  );
};

export default Button;
