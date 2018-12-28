/* eslint-disable semi */
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function Microformats({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={microformatsDetailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

Microformats.defaultProps = {
  url: ``,
  indieauthEndpoint: ``,
  tokenEndpoint: ``,
  microsub: ``,
  micropub: ``,
  feedPath: `/posts/`,
  pingback: ``
};

Microformats.propTypes = {
  url: PropTypes.string,
  indieauthEndpoint: PropTypes.string,
  tokenEndpoint: PropTypes.string,
  microsub: PropTypes.string,
  micropub: PropTypes.string,
  feedPath: PropTypes.string,
  pingback: PropTypes.string
};

export default Microformats;

const microformatsDetailsQuery = graphql`
  query MicroformatsQuery {
    site {
      siteMetadata {
        url
        indieauthEndpoint
        tokenEndpoint
        microsub
        micropub
        feedPath
        pingback
      }
    }
  }
`;
