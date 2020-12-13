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
  variants?: {};
}

const Button: React.FC<ButtonProps> = ({
  textSize,
  bgColor,
  textColor,
  title,
  borderColor,
  variants,
}) => {
  const handleClick = () => {
    console.log("Free pizza!");
  };
  return (
    <motion.button
      className={classnames(
        `text-${textColor} font-semibold py-4 px-6 trans-ease-out `,
        bgColor ? `bg-${bgColor}` : "bg-transparent",
        `border rounded border-${borderColor} focus:outline-none`,
        {
          "text-base": textSize === "sm",
          "text-xl": textSize === "lg",
          "text-2xl": textSize === "2xl",
        },
        ` hover:bg-${borderColor}   transform  active:scale-95 `
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
