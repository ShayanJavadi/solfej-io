
import { Link } from "gatsby";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import classNames from "classnames";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { useState } from 'react';
import MenuImg from "./menu.svg";
import CloseMenuImg from "./close-menu.svg";
import logo from "../../images/logo.png";
import logoNoText from "../../images/logo-no-text.png";
import getPlatform, { IOS, ANDROID, DESKTOP } from "../../common/utils/getPlatform";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../common/consts/outBoundLinks";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import appStoreLinkClicked from "../../common/utils/analytics/appStoreLinkClicked";

import "./Header.scss";
const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";

const getGetTheAppLink = () => {
    const platform = getPlatform()
    if (platform === DESKTOP) {
        return "/";
    }

    if (platform === IOS) {
        return APP_STORE_URL;
    }

    if (platform === ANDROID) {
        return PLAY_STORE_URL;
    }
}

export default function Header(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTypeformOpen, setIsTypeformOpen] = useState(false);
    const { isDetatched } = props;
    let typeForm = React.createRef();
    const getTheAppLink = getGetTheAppLink();

    function handleClick() {
        typeForm.current.typeform.open();
    }

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
            <ReactTypeformEmbed
                url="https://shayanjavadi.typeform.com/to/wO59zz"
                ref={typeForm}
                popup
                onSubmit={() => setTimeout(() => typeForm.current.typeform.close(), 1000)}
                ref={tf => {
                    typeForm.current = tf;
                }}
                style={{
                    visibility: isTypeformOpen ? "visible" : "hidden"
                }}
            />
            <div className={classes}>
                <nav className="logo">
                    <Link to="/">
                        <img src={logo} alt="solfej-logo-music-theory-app" className="solfej-logo" />
                    </Link>
                </nav>
     
                <ul>
    
                    <li>
                        <Link to="/blog">
                            Blog
                </Link>
                    </li>
                    <li>
                        <Link to="/chords">
                            Chord Search
                </Link>
                    </li>
                    <li>
                        <Link to="/scales">
                            Scale Search
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
                    <li className="cta" onClick={getTheAppLink !== "/" && appStoreLinkClicked(0)}>
                        {
                            getTheAppLink === "/" ?
                                <Link to={getTheAppLink}>
                                    <button
                                        className="cta-button primary"
                                    >
                                        GET THE APP
                                    </button>
                                </Link> :
                                <a href={getTheAppLink}>
                                    <button
                                        className="cta-button primary"
                                    >
                                        GET THE APP
                                    </button>
                                </a>
                        }
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
                        <Link to="/chords">
                            Chord Search
                </Link>
                    </li>
                    <li>
                        <Link to="/scales">
                            Scale Search
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
