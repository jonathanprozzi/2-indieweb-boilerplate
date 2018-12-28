import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            tagline
            author
            position
            organization
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteURL={data.site.siteMetadata.url}
          sitePosition={data.site.siteMetadata.position}
          siteOrganization={data.site.siteMetadata.organization}
          siteTagline={data.site.siteMetadata.tagline}
        />
        <hr />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {children}
          <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            <div class="rel-me-icons">
              <a href="https://github.com/jonathanprozzi" rel="me">
                GitHub
              </a>
              <a href="https://twitter.com/jonathanprozzi" rel="me">
                Twitter
              </a>
              <a href="https://micro.blog/username" rel="me">
                micro.blog
              </a>
              <a class="u-email" href="mailto:email@emailaddress.com">
                Email
              </a>
            </div>
            <span class="footer-tagline">
              Built with ❤️ in Baltimore &copy 2018
            </span>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
