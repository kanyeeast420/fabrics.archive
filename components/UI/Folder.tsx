import React from "react";
import { RiLinkM } from "react-icons/ri";
import Link from "next/link";

interface Folder {
  name: string;
  url: string;
}

export const Folder: React.FC<Folder> = ({ name, url }) => {
  return (
    <div className="folder border-text bg-text flex cursor-pointer flex-col rounded-md border border-opacity-20 bg-opacity-10 p-2 hover:bg-opacity-20  focus:animate-ping">
      <Link href={`/fabrics${url}`} as={`/fabrics${url}`}>
        <a>
          <span className="-mx-5 text-9xl">📁</span>
          <div className="flex flex-row items-center pt-4 pl-1 justify-between">
            <span className=" pr-2 text-base font-light">{name}</span>
            <RiLinkM size={18}></RiLinkM>
          </div>
        </a>
      </Link>
      {/* <Image src={folder} width={150} height={150}></Image> */}
    </div>
  );
};
