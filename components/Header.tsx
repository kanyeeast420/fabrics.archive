import React, { useState, useEffect } from "react";
import { Button } from "./UI/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

interface Header {}

export const Header: React.FC<Header> = ({}) => {
  const [itemCount, setItemCount] = useState();
  useEffect(() => {
    fetch("/api/fabric-count")
      .then((res) => res.json())
      .then((res) => setItemCount(res));
  });

  return (
    <div className="bg-background fixed z-10 flex h-16 w-full items-center justify-between overflow-hidden bg-opacity-20 pr-5 pl-5 backdrop-blur-md">
      <div className="left flex flex-row">
        <Link href={`/`} as={`/`}>
          <a>
            <span className="text-2xl font-bold">
              FABRICS.ARCHIVE 🌍 [{itemCount}]
            </span>
          </a>
        </Link>
      </div>
      <div className="right flex flex-row">
        <Button
          type="button"
          placeholder="API"
          link="/api/fabrics"
          target="_blank"
        ></Button>
        <Button
          placeholder="Add new wish"
          type="button"
          link="/new"
          target="_self"
        ></Button>
        <Button type="button" link="/search" target="_self">
          <AiOutlineSearch></AiOutlineSearch>
        </Button>
      </div>
    </div>
  );
};
