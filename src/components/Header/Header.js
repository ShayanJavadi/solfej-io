
import React from 'react';
import { Link } from "gatsby";
import logo from "../../images/logo.png"

import "./Header.scss";

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
                    Forum
                </a>
            </li>
        </ul>
    </header>
  )
}
