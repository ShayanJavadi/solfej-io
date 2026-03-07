
import { Link } from "gatsby";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import classNames from "classnames";
import React, { useState } from 'react';
import MenuImg from "./menu.svg";
import CloseMenuImg from "./close-menu.svg";
import logo from "../../images/logo.png";
import logoNoText from "../../images/logo-no-text.png";
import getPlatform, { IOS, ANDROID, DESKTOP } from "../../common/utils/getPlatform";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../common/consts/outBoundLinks";
import { appStoreLinkClicked, navigationClicked, contactClicked } from "../../common/utils/analytics";

import "./Header.scss";
const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";

const handleNavBlog = () => navigationClicked("Blog")
const handleNavChordSearch = () => navigationClicked("Chord Search")
const handleNavScaleSearch = () => navigationClicked("Scale Search")
const handleNavHome = () => navigationClicked("Home")

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

    return APP_STORE_URL
}

export default function Header(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTypeformOpen, setIsTypeformOpen] = useState(false);
    const { isDetatched, translatedStrings, locale } = props;
    const prefix = locale ? `/${locale}` : "";
    let typeForm = React.createRef();
    const getTheAppLink = getGetTheAppLink();

    function handleClick() {
        typeForm.current.typeform.open();
    }

    function handleCtaClick() {
        if (getTheAppLink !== "/") appStoreLinkClicked(0)
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
                    <Link to={`${prefix}/`}>
                        <img src={logo} alt="solfej-logo-music-theory-app" className="solfej-logo" />
                    </Link>
                </nav>

                <ul>

                    <li>
                        <Link to={`${prefix}/blog`} onClick={handleNavBlog}>
                            {translatedStrings ? translatedStrings.blog : "Blog"}
                </Link>
                    </li>
                    <li>
                        <Link to={`${prefix}/chords`} onClick={handleNavChordSearch}>
                            {translatedStrings ? translatedStrings.chordSearch : "Chord Search"}
                </Link>
                    </li>
                    <li>
                        <Link to={`${prefix}/scales`} onClick={handleNavScaleSearch}>
                            {translatedStrings ? translatedStrings.scaleSearch : "Scale Search"}
                </Link>
                    </li>
                    <li>
                        <a href="mailto:shayanjavadi1375@gmail.com" onClick={contactClicked}>
                            {translatedStrings ? translatedStrings.contact : "Contact"}
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
                    <li className="cta" onClick={handleCtaClick}>
                        {
                            getTheAppLink === "/" ?
                                <Link to={getTheAppLink}>
                                    <button
                                        className="cta-button primary"
                                    >
                                        {translatedStrings ? translatedStrings.getTheApp : "GET THE APP"}
                                    </button>
                                </Link> :
                                <a href={getTheAppLink}>
                                    <button
                                        className="cta-button primary"
                                    >
                                        {translatedStrings ? translatedStrings.getTheApp : "GET THE APP"}
                                    </button>
                                </a>
                        }
                    </li>
                </ul>
            </div>
            <div className={mobileNavClasses}>
                <ul>
                    <li>
                        <Link to={`${prefix}/`} onClick={handleNavHome}>
                            {translatedStrings ? translatedStrings.home : "Home"}
                </Link>
                    </li>
                    <li>
                        <Link to={`${prefix}/chords`} onClick={handleNavChordSearch}>
                            {translatedStrings ? translatedStrings.chordSearch : "Chord Search"}
                </Link>
                    </li>
                    <li>
                        <Link to={`${prefix}/scales`} onClick={handleNavScaleSearch}>
                            {translatedStrings ? translatedStrings.scaleSearch : "Scale Search"}
                </Link>
                    </li>
                    <li>
                        <Link to={`${prefix}/blog`} onClick={handleNavBlog}>
                            {translatedStrings ? translatedStrings.blog : "Blog"}
                </Link>
                    </li>

                    <li>
                        <a href="mailto:shayanjavadi1375@gmail.com" onClick={contactClicked}>
                            {translatedStrings ? translatedStrings.contact : "Contact"}
                </a>
                    </li>
                </ul>
              
            </div>
        </header>

  )
}
