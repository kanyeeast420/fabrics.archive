import Head from "next/head";
import { Feed } from "../components/Feed";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Desire.me</title>
      </Head>

      <Feed />
    </Layout>
  );
}
