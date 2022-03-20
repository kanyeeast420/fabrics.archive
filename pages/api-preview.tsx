import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function API() {
  return (
    <Layout>
      <Head>
        <title>fabrics.archive</title>
      </Head>
      <div className="w-full pt-14 pl-5 md:w-1/2">
        <iframe
          src="/api/fabrics"
          className="!text-text h-screen w-full"
          id="iframe"
        ></iframe>
      </div>
    </Layout>
  );
}
