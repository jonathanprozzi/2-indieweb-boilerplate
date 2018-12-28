import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
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
    <span class="footer-tagline">Built with ❤️ in Baltimore &copy 2018</span>
  </footer>
);

export default Footer;
