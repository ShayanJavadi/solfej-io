import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const SunoKillingMusicHero = (alt) => {
    const data = useStaticQuery(graphql`
    query {
      SunoKillingMusicHero: file(relativePath: { eq: "blog-post-hero-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

    return (
        <BackgroundImage
            Tag="section"
            className="background-image"
            fluid={data.SunoKillingMusicHero.childImageSharp.fluid}
            backgroundColor={`#F3F5F9`}
            style={{
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </BackgroundImage>
    )
}

export default SunoKillingMusicHero
