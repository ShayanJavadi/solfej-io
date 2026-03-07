/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SUPPORTED_LOCALES = ["zh", "fr", "ru", "es", "de", "it", "pt", "nl", "ja"]

function SEO({ description, lang, meta, title, image, locale, pagePath, noIndex }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image,
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.url
  const htmlLang = locale || lang

  // Build hreflang link tags when we have a pagePath
  const hreflangLinks = []
  if (pagePath) {
    // x-default points to the English version
    hreflangLinks.push(
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pagePath}`} key="hreflang-default" />
    )
    hreflangLinks.push(
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${pagePath}`} key="hreflang-en" />
    )
    SUPPORTED_LOCALES.forEach(loc => {
      hreflangLinks.push(
        <link rel="alternate" hrefLang={loc} href={`${siteUrl}/${loc}${pagePath}`} key={`hreflang-${loc}`} />
      )
    })
  }

  const robotsMeta = noIndex ? [{ name: 'robots', content: 'noindex, follow' }] : []

  return (
    <Helmet
      htmlAttributes={{
        lang: htmlLang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
              name: "ahrefs-site-verification",
              content: "2c2c53403829ce0334f6d7bff037bb7d11cadca5c2666a94ab6e55adb3b96191"
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
            property: "og:image",
            content: `${siteUrl}${image || site.siteMetadata.image}`
        },
        {
            name: `twitter:image`,
            content: `${siteUrl}${image || site.siteMetadata.image}`
        }
      ].concat(robotsMeta).concat(meta)}
    >
      {hreflangLinks}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  noIndex: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  locale: PropTypes.string,
  pagePath: PropTypes.string,
  noIndex: PropTypes.bool,
}

export default SEO
