import React from "react";
import { Button } from "../components/UI/Button";
import { Layout } from "./../components/Layout";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="h-f flex h-screen w-full flex-col items-center justify-center">
          <span className="mb-5">404 - No treasure to find in here</span>
          <Button
            link="/"
            target="_self"
            placeholder="Go Home"
            type="button"
          ></Button>
        </div>
      </Layout>
    );
  }
}
