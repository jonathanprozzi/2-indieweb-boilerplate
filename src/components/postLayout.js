import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

const postlayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <article>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }}
        />
      </article>
    </Layout>
  );
};
export default postlayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
