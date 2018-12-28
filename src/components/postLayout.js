import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

const postlayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
    </Layout>
  );
};
export default postlayout;

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/second-post" } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date
      }
    }
  }
`;
