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
        <h1>HI</h1>
      </div>
    )}
  />
);

export default PostListing;
