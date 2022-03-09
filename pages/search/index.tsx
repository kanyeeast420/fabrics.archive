import React from "react";
import { Layout } from "../../components/Layout";

interface Search {}

export default function Search({}) {
  return (
    <Layout>
      <div className="flex h-screen w-full items-center justify-center">
        <input
          placeholder="Search..."
          className="border-text bg-text mr-1  rounded-md border border-opacity-20 bg-opacity-25 outline-none backdrop-blur-md placeholder:text-text"
        ></input>
      </div>
    </Layout>
  );
}
