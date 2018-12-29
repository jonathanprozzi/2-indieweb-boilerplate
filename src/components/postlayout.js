import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "./layout";

const PostLayout = props => {
  const { PostItems, SiteMeta } = props.data;

  return (
    <Layout>
      <article class="h-entry">
        <h1 class="p-name">{PostItems.frontmatter.title}</h1>
        <p class="p-author h-card">
          Published by{" "}
          <Link to={SiteMeta.siteMetadata.url}>
            {SiteMeta.siteMetadata.author}
          </Link>{" "}
          𐄁{" "}
          <Link class="u-url" to={`/posts${PostItems.frontmatter.slug}`}>
            <time class="dt-published" datetime="MMMM DD, YYYY">
              {PostItems.frontmatter.date}
            </time>
          </Link>
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
        date
        slug
      }
    }

    SiteMeta: site {
      siteMetadata {
        author
        url
      }
    }
  }
`;
