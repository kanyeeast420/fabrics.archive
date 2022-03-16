import React from "react";
import { Layout } from "../../components/Layout";
import { Feed } from "../../components/Feed";
import { useRouter } from "next/router";

export default function Page({}) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Feed url={`fabrics/type?category=${id}`}></Feed>
    </Layout>
  );
}
