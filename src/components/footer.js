import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Footer = ({ siteGithub, siteTwitter, siteMicroblog }) => (
  <footer>
    <div class="rel-me-icons">
      <ul>
        <li>
          <a href={siteGithub} rel="me">
            GitHub
          </a>
        </li>
        <li>
          <a href={siteTwitter} rel="me">
            Twitter
          </a>
        </li>
        <li>
          <a href={siteMicroblog} rel="me">
            Micro.blog
          </a>
        </li>
      </ul>
    </div>
    <span class="footer-tagline">
      Built with ❤️ 🦄 in Baltimore with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a> © 2018
    </span>
  </footer>
);

export default Footer;
