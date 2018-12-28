import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Archive = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AllPostsQuery {
        allMarkdownRemark {
          edges {
            node {
              excerpt
              timeToRead
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
                categories
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <aside />
      </>
    )}
  />
);

export default Archive;
