import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SunoKillingMusicThumbnail = (alt) => {
    const data = useStaticQuery(graphql`
    query {
      SunoKillingMusicThumbnail: file(relativePath: { eq: "blog-post-hero-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

    return <Img fluid={data.SunoKillingMusicThumbnail.childImageSharp.fluid} alt={alt} />
}

export default SunoKillingMusicThumbnail
