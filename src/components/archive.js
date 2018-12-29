import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostsArchive {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h2>Archived Posts:</h2>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
);

export default Archive;
