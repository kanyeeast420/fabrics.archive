import React from "react";
import Link from "next/link";

interface Button {
  placeholder?: string;
  type: "button" | "submit" | "reset";
  link: string;
  target: "_self" | "_blank";
}

export const Button: React.FC<Button> = ({
  placeholder,
  type,
  children,
  link,
  target,
}) => {
  return (
    <div className="bg-text mr-1 rounded-md border w-fit border-opacity-20 flex items-center bg-opacity-25 border-text backdrop-blur-md">
      <Link href={`${link}`} as={`${link}`}>
        <a target={target}>
          <button
            type={type}
            className="flex flex-row items-center justify-center"
          >
            <span className="text-xs uppercase">{placeholder}</span>
            <div>{children}</div>
          </button>
        </a>
      </Link>
    </div>
  );
};
