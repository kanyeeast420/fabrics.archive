import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function API() {
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch("/api/fabrics")
      .then((res) => res.json())
      .then((res) => setResponse(res));
  });

  return (
    <Layout>
      <Head>
        <title>fabrics.archive</title>
      </Head>
      <div className="w-full pt-14 md:w-1/2 pl-5">
        <iframe
          src="/api/fabrics"
          className="text-text h-screen w-full"
        ></iframe>
      </div>
    </Layout>
  );
}
