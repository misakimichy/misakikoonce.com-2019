import React from 'react'
import { css } from "@emotion/core"
import { Link } from 'gatsby'

export default ({ children }) => (
    <div>
        <div>
            <Link to='/'>
                <a>Go back</a>
            </Link>
            <div>
                <span>avator.img</span><span>author</span>
            </div>
        </div>
        <Link
            to={`/works/`}
            css={css`
                float: right;
            `}
        >
            Work
        </Link>
        {children}
    </div>
)