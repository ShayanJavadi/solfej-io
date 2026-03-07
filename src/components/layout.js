/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import classNames from "classnames";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import FacebookIcon from "../images/facebook.svg"
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import "./layout.scss"
import "./index.scss"
import SEO from "./seo";
import Header from "./Header/index";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { socialLinkClicked, contactClicked, trackScrollDepth, trackTimeOnPage } from "../common/utils/analytics";

const handleFacebookClick = () => socialLinkClicked("Facebook")
const handleInstagramClick = () => socialLinkClicked("Instagram")
const handleTwitterClick = () => socialLinkClicked("Twitter")

const Layout = ({ children, title, className, image, description, translatedStrings, locale, pagePath, noIndex }) => {
  const prefix = locale ? `/${locale}` : "";
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
    const scrollMilestonesHit = useRef({});
    const timeMilestonesHit = useRef({});

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0 && !isDetatched) {
            setIsDetatched(true)
        }

        if (currPos.y === 0 && isDetatched) {
            setIsDetatched(false)
        }

        // Scroll depth tracking
        if (typeof document !== 'undefined') {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                const pct = Math.round((Math.abs(currPos.y) / scrollHeight) * 100);
                [25, 50, 75, 100].forEach(milestone => {
                    if (pct >= milestone && !scrollMilestonesHit.current[milestone]) {
                        scrollMilestonesHit.current[milestone] = true;
                        trackScrollDepth(milestone);
                    }
                });
            }
        }
    }, [isDetatched])

    // Time-on-page tracking
    useEffect(() => {
        let elapsed = 0;
        const thresholds = [30, 60, 120, 300];
        const interval = setInterval(() => {
            if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                elapsed++;
                thresholds.forEach(t => {
                    if (elapsed === t && !timeMilestonesHit.current[t]) {
                        timeMilestonesHit.current[t] = true;
                        trackTimeOnPage(t);
                    }
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const classes = classNames(
        "solfej",
        isDetatched && "header-detatched"
    )

  return (
    <>

    <div className={classes}>
        <SEO title={title} {...{ image, description}} locale={locale} pagePath={pagePath} noIndex={noIndex} />
        <Header isDetatched={isDetatched} translatedStrings={translatedStrings} locale={locale} />
        <main className={className}>{children}</main>
        <footer>
      
            <div className="footer-container">
                <div>
                          <ul>
                              <li>
                                  <Link to={`${prefix}/`}>
                                      {translatedStrings ? translatedStrings.home : "Home"}
                                  </Link>
                              </li>
                              <li>
                                  <Link to={`${prefix}/chords`}>
                                      {translatedStrings ? translatedStrings.chordSearch : "Chord Search"}
                                  </Link>
                              </li>
                              <li>
                                  <Link to={`${prefix}/blog`}>
                                      {translatedStrings ? translatedStrings.blog : "Blog"}
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/about">About</Link>
                              </li>
                              <li>
                                  <a href="mailto:shayanjavadi1375@gmail.com" onClick={contactClicked}>
                                      {translatedStrings ? translatedStrings.contact : "Contact"}
                                  </a>
                              </li>
                              <li>
                                  <Link to="/privacy">Privacy Policy</Link>
                              </li>
                              <li>
                                  <Link to="/terms-of-service">Terms of Service</Link>
                              </li>
                          </ul>
                </div>
                <div>
                          <a href="https://www.facebook.com/Solfej-Music-Theory-App-116381003147367/" onClick={handleFacebookClick}>
                              <img src={FacebookIcon} alt="" />
                          </a>
                          <a href="https://www.instagram.com/solfej.app/" onClick={handleInstagramClick}>
                              <img src={InstagramIcon} alt="" />
                          </a>
                          <a href="https://twitter.com/solfej_app" onClick={handleTwitterClick}>
                              <img src={TwitterIcon} alt="" />
                          </a>
                </div>
            </div>
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
