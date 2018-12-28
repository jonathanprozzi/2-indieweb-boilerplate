import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle, siteTagline, sitePosition, siteOrganization }) => (
  <div
    class="h-card"
    style={{
      background: `#eee`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 class="site--title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`
          }}
        >
          <a class="p-name u-url u-id" rel="me">
            {siteTitle}
          </a>
        </Link>
      </h1>
      <span class="p-job-title author-job-title">{sitePosition}</span> at{" "}
      <span class="p-org author-job-organization">
        <a href="https://digitalharbor.org" target="_blank" rel="noopener" />
        {siteOrganization}
      </span>
      <br />
      <span class="p-note site-description">{siteTagline}</span>
      <br />
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
