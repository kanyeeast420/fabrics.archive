import React, { useState, useEffect } from "react";
import { Button } from "./UI/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

interface Header {}

export const Header: React.FC<Header> = ({}) => {
  return (
    <div className="bg-background fixed z-10 flex h-16 w-full items-center justify-between overflow-hidden bg-opacity-20 pr-5 pl-5 backdrop-blur-md">
      <div className="left flex flex-row">
        <Link href={`/`} as={`/`}>
          <a>
            <span className="text-2xl font-bold">FABRICS.ARCHIVE 🌍 </span>
          </a>
        </Link>
      </div>
      <div className="right flex flex-row">
        <Button
          type="button"
          placeholder="API"
          link="/api-preview"
          target="_self"
        ></Button>
        <Button
          placeholder="Add new wish"
          type="button"
          link="/new"
          target="_self"
        ></Button>
        <Button type="button" link="/search" target="_self">
          <AiOutlineSearch size={15}></AiOutlineSearch>
        </Button>
      </div>
    </div>
  );
};
