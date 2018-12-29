import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "./layout";

const PostLayout = props => {
  const { PostItems, SiteAuthor } = props.data;
  return (
    <Layout>
      <article class="h-entry">
        <h1 class="p-name">{PostItems.frontmatter.title}</h1>
        <p class="p-author h-card">
          Published by{" "}
          <Link to={SiteAuthor.siteMetadata.url}>
            {SiteAuthor.siteMetadata.author}
          </Link>{" "}
          𐄁{" "}
          <time class="dt-published" datetime="MMMM DD, YYYY">
            {PostItems.frontmatter.date}
          </time>
        </p>
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
export default PostLayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    PostItems: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }

    SiteAuthor: site {
      siteMetadata {
        author
        url
      }
    }
  }
`;
