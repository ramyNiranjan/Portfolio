import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps {
  textSize: string;
  value?: string;
  textColor: string;
  title: string;
  isActive?: boolean;
  padY?: string;
  variants?: {};
  onClick?: any;
  ml?: string;
}

const Button: React.FC<ButtonProps> = ({
  textSize,
  textColor,
  title,
  isActive,
  onClick,
  variants,
  padY = "4",
  ml = 4,
}) => {
  return (
    <motion.button
      className={classnames(
        `text-${textColor} font-semibold py-${padY} px-6 trans-ease-out tracking-wider mb-4 ml-${ml}`,
        isActive ? `bg-primary-300` : "bg-transparent",
        `border rounded border-primary-300 focus:outline-none`,
        {
          "text-xs": textSize === "xs",
          "text-sm": textSize === "sm",
          "text-lg": textSize === "lg",
          "text-xl": textSize === "xl",
          "text-2xl": textSize === "2xl",
        },
        ` hover:bg-primary-300   transform  active:scale-95 `
      )}
      onClick={onClick}
      type="button"
      variants={variants}
    >
      {title}
    </motion.button>
  );
};

export default Button;
