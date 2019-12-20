/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import classNames from "classnames";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import FacebookIcon from "../images/facebook.svg"
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import "./layout.scss"
import SEO from "./seo";
import Header from "./Header/index";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Layout = ({ children, title, className, image, description }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const [isDetatched, setIsDetatched] = useState(false);
    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0 && !isDetatched) {
            setIsDetatched(true)
        }

        if (currPos.y === 0 && isDetatched) {
            setIsDetatched(false)
        }
    }, [isDetatched])
    const classes = classNames(
        "solfej",
        isDetatched && "header-detatched"
    )

  return (
    <>
    <div className={classes}>
        <SEO title={title} {...{ image, description}}/>
        <Header isDetatched={isDetatched} />
        <main className={className}>{children}</main>
        <footer>
            <a href="https://www.facebook.com/Solfej-Music-Theory-App-116381003147367/">
                <img src={FacebookIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/solfej.app/">
                <img src={InstagramIcon} alt="" />
            </a>
            <a href="https://twitter.com/solfej_app">
                <img src={TwitterIcon} alt="" />
            </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
