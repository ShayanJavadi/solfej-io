
import React from 'react';
import { isEmpty } from "lodash";
import "./AliasOverline.scss";
import { Link } from 'gatsby';

export default function AliasOverline(props) {
    const { aliases } = props

    return (
        <div className="alias-overline">
                {
                    !isEmpty(aliases) &&
                    <p className="alias-p">
                        Aliases: {
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
