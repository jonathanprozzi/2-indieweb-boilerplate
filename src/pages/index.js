import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PostListing from "../components/postlisting";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h2>Hello!</h2>
    <PostListing />
  </Layout>
);

export default IndexPage;
