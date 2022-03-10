import React from "react";
import { Layout } from "./../../components/Layout";
import { Button } from "./../../components/UI/Button";

interface index {}

export default function NewFabric({}) {
  return (
    <Layout>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <form method="POST" action="/api/add-fabric">
          <div className="input">
            <input
              placeholder="Fabric Name"
              name="name"
              className="border-text bg-text placeholder:text-text mb-2 w-96 rounded-md border border-opacity-20 bg-opacity-25 uppercase outline-none backdrop-blur-md"
            ></input>
          </div>
          <div className="input">
            <input
              placeholder="Fabric Img Url"
              name="img"
              className="border-text  bg-text placeholder:text-text mb-2 w-96 rounded-md border border-opacity-20 bg-opacity-25 uppercase outline-none backdrop-blur-md"
            ></input>
          </div>
          <div className="input">
            <input
              placeholder="Fabric Link"
              name="link"
              className="border-text bg-text placeholder:text-text mb-2 w-96 rounded-md border border-opacity-20 bg-opacity-25 uppercase outline-none backdrop-blur-md"
            ></input>
          </div>
          <div className="input">
            <input
              placeholder="Fabric category"
              name="category"
              className="border-text bg-text placeholder:text-text mb-2 w-96 rounded-md border border-opacity-20 bg-opacity-25 uppercase outline-none backdrop-blur-md"
            ></input>
          </div>
          <div className="bg-text border-text mr-1 flex w-full items-center rounded-md border border-opacity-20 bg-opacity-25 text-center backdrop-blur-md">
            <button className="flex w-full flex-row items-center justify-center text-center">
              <span className="text-center text-xs uppercase">
                Add new Fabric
              </span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
