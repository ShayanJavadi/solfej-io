import classNames from "classnames";
import Fuse from "fuse.js";
import { isEmpty } from "lodash";
import React, { useEffect, useState, useRef } from "react";
import { navigate, Link } from "gatsby";
import "./SearchBar.scss";

export default function SearchBar(props) {
    const { searchData, searchResultPostFix } = props;
    const [searchQuery, setSearchQuery] = useState(undefined);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchResults, setSearchResults] = useState(undefined);
    const searchResultsNotEmpty = !isEmpty(searchResults);
    const searchWrapperRef = useRef(null);
    
    const classes = classNames(
        "search-bar-container",
        isInputFocused && "focused",
        searchResultsNotEmpty && isInputFocused && "has-results",
    )
    var options = {
        shouldSort: true,
        caseSensitive: false,
        threshold: 0.05,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            {
                name: "a",
                weight: 1
            },
        ]
    };
    const fuse = new Fuse(searchData, options); // "list" is the item array


    const handleClickOutside = event => {
        if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
            setIsInputFocused(false)
        }
    }

    useEffect(() => {
        const topTenSearchResults = fuse.search(searchQuery).slice(0, 10);
        setSearchResults(topTenSearchResults)


        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchQuery])


    return (
        <div className={classes} ref={searchWrapperRef}>
            <div className="search-bar">
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path style={{ fill: "#666" }} d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
                <input
                    type="text"
                    onChange={event => setSearchQuery(event.target.value)}
                    placeholder="Type here to search for chords..."
                    onFocus={() => setIsInputFocused(true)}
                    onKeyDown={e => {
                        if (searchResultsNotEmpty && e.keyCode === 13) {
                            navigate(searchResults[0].b)
                        }
                    }}
                />
            </div>
            {
                searchResultsNotEmpty && isInputFocused &&
                <div className="search-results-container">
                    <div className="line-break" />
                    <div className="search-results">
                        {
                            searchResults.map(chord => (
                                <Link to={chord.b} key={chord.b}>

                                    <div className="search-result">
                                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path style={{ fill: "#666" }} d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                        <p>{chord.a.trim()} {!chord.a.includes(searchResultPostFix) && searchResultPostFix || ""}</p>
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                </div>
            }

        </div>
    )
}