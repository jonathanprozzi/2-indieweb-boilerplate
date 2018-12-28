import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
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
          >
            <link rel="canonical" href={data.site.siteMetadata.canonical} />
            <link
              rel="authorization_endpoint"
              href={data.site.siteMetadata.indieauthEndpoint}
            />
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  url: ``,
  canonical: ``,
  indieauthEndpoint: `https://indieauth.com/auth`,
  tokenEndpoint: `https://tokens.indieauth.com/token`,
  microsub: ``,
  micropub: ``,
  feedPath: `/posts/`,
  pingback: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  canonical: PropTypes.string,
  indieauthEndpoint: PropTypes.string,
  tokenEndpoint: PropTypes.string,
  microsub: PropTypes.string,
  micropub: PropTypes.string,
  feedPath: PropTypes.string,
  pingback: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
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
