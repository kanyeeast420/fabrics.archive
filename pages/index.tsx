import React from "react";
import { Layout } from "../components/Layout";
import { Desktop } from "../components/Desktop";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>fabrics.archive</title>
      </Head>

      <Desktop />
    </Layout>
  );
}
