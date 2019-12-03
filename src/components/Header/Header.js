
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import logo from "../../images/logo.png";
import "./Header.scss";
const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";


export default function Header(props) {
  return (
    <header className="header">
        <nav>
            <Link to="/">
                <img src={logo} alt="solfej-logo-music-theory-app" className="solfej-logo" />
            </Link>
        </nav>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/blog">
                      Blog
                </Link>
            </li>
           
            <li>
                <a href="https://solfej.canny.io/solfej-user-forums">
                    Contact
                </a>
            </li>
            <li className="cta">
  
            <OutboundLink href={typeFormUrl}>

                      <button className="cta-button primary">Get Early Access</button>

                  </OutboundLink>

            </li>
        </ul>
    </header>
  )
}
