import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

const postlayout = props => {
  const { PostItems, SiteAuthor } = props.data;
  return (
    <Layout>
      <article class="h-entry">
        <h1 class="p-name">{PostItems.frontmatter.title}</h1>
        <h2 class="p-author h-card">{SiteAuthor.siteMetadata.author}</h2>
        <div
          class="e-content"
          dangerouslySetInnerHTML={{
            __html: PostItems.html
          }}
        />
      </article>
    </Layout>
  );
};
export default postlayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    PostItems: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date
      }
    }

    SiteAuthor: site {
      siteMetadata {
        author
      }
    }
  }
`;
