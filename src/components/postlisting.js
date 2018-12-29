import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const POST_LISTING_QUERY = graphql`
  query PostListingQuery {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          timeToRead
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

const PostListing = () => (
  <StaticQuery
    query={POST_LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      <div>
        <h2>Recent Posts:</h2>
        {allMarkdownRemark.edges.map(edge => (
          <article>
            <Link to={`/posts/${edge.node.frontmatter.slug}`}>
              <h3>{edge.node.frontmatter.title}</h3>
            </Link>
            <p>
              Published on: <date>{edge.node.frontmatter.date}</date> 𐄁{" "}
              {edge.node.timeToRead} Minute Read
            </p>
            <p>{edge.node.excerpt}</p>
            <Link to={`/posts/${edge.node.frontmatter.slug}`}>Read More</Link>
          </article>
        ))}
      </div>
    )}
  />
);

export default PostListing;
