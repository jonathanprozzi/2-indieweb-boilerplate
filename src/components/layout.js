import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Archive from "./archive";
import Footer from "./footer";
import "./layout.css";

const SITE_META_QUERY = graphql`
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
        github
        twitter
        microBlog
        email
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={SITE_META_QUERY}
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
        <main>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            {children}
            <hr />
            <Footer
              siteGithub={data.site.siteMetadata.github}
              siteTwitter={data.site.siteMetadata.twitter}
              siteMicroblog={data.site.siteMetadata.microBlog}
            />
          </div>
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
