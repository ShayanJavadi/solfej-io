import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ColorPaletteBlog = (alt) => {
    const data = useStaticQuery(graphql`
    query {
      ColorPaletteBlog: file(relativePath: { eq: "blog-post-hero-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)




    return (
        <BackgroundImage
            Tag="section"
            className="background-image"
            fluid={data.ColorPaletteBlog.childImageSharp.fluid}
            backgroundColor={`#F3F5F9`}
            style={{
                // Defaults are overwrite-able by setting one or each of the following:
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </BackgroundImage>
    )
}

export default ColorPaletteBlog
