
import React from 'react';
import { isEmpty } from "lodash";
import "./AliasOverline.scss";
import { Link } from 'gatsby';

export default function AliasOverline(props) {
    const { aliases, translatedStrings } = props
    const ui = translatedStrings || {};

    return (
        <div className="alias-overline">
                {
                    !isEmpty(aliases) &&
                    <p className="alias-p">
                        {ui.aliases || "Aliases: "}{
                            aliases.map(alias => {
                                return (
                                    <Link to={alias.url} key={alias.url}>{alias.name}</Link>
                                )
                            })
                        }
                    </p>
                }
        </div>
     )
}
