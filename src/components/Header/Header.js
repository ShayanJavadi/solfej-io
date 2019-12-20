
import { Link } from "gatsby";
import classNames from "classnames";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { useState } from 'react';
import MenuImg from "./menu.svg";
import CloseMenuImg from "./close-menu.svg";
import logo from "../../images/logo.png";
import logoNoText from "../../images/logo-no-text.png";

import "./Header.scss";
const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";


export default function Header(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDetatched } = props;
   
    const classes = classNames(
        "header",
        isDetatched && "detatched"
    )

    const mobileNavClasses = classNames(
        "mobile-nav",
        isMobileMenuOpen && "visible"
    )

    return (
        <header> 
            <div className={classes}>
                <nav className="logo">
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
                        <a href="mailto:shayanjavadi1375@gmail.com">
                            Contact
                </a>
                    </li>
                  
                    <li className="menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {
                            isMobileMenuOpen ?
                                <img src={CloseMenuImg} /> :
                                <img src={MenuImg} />
                        }
                    </li>
                    <li className="mobile-logo">
                        <Link to="/">
                            <img src={logoNoText} alt="solfej-logo-music-theory-app" className="solfej-logo" />
                        </Link>
                    </li>
                    <li className="cta">

                        <OutboundLink href={typeFormUrl}>
                            <button className="cta-button primary">Get Early Access</button>
                        </OutboundLink>

                    </li>
                </ul>
            </div>
            <div className={mobileNavClasses}>
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
                        <a href="mailto:shayanjavadi1375@gmail.com">
                            Contact
                </a>
                    </li>
                </ul>
              
            </div>
        </header>

  )
}
