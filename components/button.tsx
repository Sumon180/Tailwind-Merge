import { cn } from "@/utils/util";
import React from "react";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  classname: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { label, type, onClick, classname } = props;
  return (
    <button
      type={type}
      className={cn(
        "bg-indigo-500 text-white w-full px-10 py-2 rounded",
        classname
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
