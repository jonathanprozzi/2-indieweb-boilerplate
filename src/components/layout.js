import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
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
            github
            twitter
            microBlog
            email
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
          <Footer 
          siteGithub={data.site.siteMetadata.github}
          siteTwitter={data.site.siteMetadata.twitter}
          siteMicroblog={data.site.siteMetadata.microblog}
          siteEmail={data.site.siteMetadata.email}
          />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
