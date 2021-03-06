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
          <Link
            class="u-url"
            to={`${SiteMeta.siteMetadata.url}/posts${
              PostItems.frontmatter.slug
            }`}
          >
            <time class="dt-published" datetime={PostItems.frontmatter.date}>
              {PostItems.frontmatter.date}
            </time>
          </Link>
        </p>
        <a href="https://microformats-example.netlify.com" class="u-url">
          Test u-url
        </a>
        <p>
          Categories:{" "}
          {PostItems.frontmatter.categories.map((category, i) => (
            <React.Fragment>
              <Link class="p-category" to={`/${category.toLowerCase()}`}>
                {category}
              </Link>
              {PostItems.frontmatter.categories.length !== i + 1 && (
                <span>, </span>
              )}
            </React.Fragment>
          ))}
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
        date(formatString: "YYYY-MM-DD ssss")
        slug
        categories
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
