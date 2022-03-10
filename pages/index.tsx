import Head from "next/head";
import { Feed } from "../components/Feed";
import { Layout } from "../components/Layout";
import { Desktop } from "../components/Desktop";


export default function Home() {


  return (
    <Layout>
      <Head>
        <title>Desire.me</title>
      </Head>

      <Desktop />
      {/* <Feed /> */}
    </Layout>
  );
}
