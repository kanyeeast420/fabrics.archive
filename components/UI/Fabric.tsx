import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface Fabric {
  _id: string;
  name: string;
  img: string;
  link: string;
  category: string;
}

export const Fabric: React.FC<Fabric> = ({
  link,
  name,
  _id,
  img,
  category,
}) => {
  return (
    <div className="bg-text border-text relative flex h-fit w-min flex-col justify-between rounded-xl border border-opacity-20 bg-opacity-25 p-2">
      <div className="justify-c mb-2 flex w-72 items-center">
        <Link href={link} as={link}>
          <a target={"_blank"}>
            <img src={img} alt="" className="w-72 rounded-xl bg-cover" />
          </a>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span>{name}</span>
        <Button
          type="button"
          placeholder="Buy"
          link={link}
          target="_blank"
        ></Button>
      </div>
    </div>
  );
};
