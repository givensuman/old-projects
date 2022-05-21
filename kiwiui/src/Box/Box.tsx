/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'

const Box = (
    { children, ...props }:
        React.HTMLAttributes<HTMLDivElement> & GlobalProps
) => {
    return (
        <div css={css`
        // Base
            max-width: 100%;

        // Global
            ${handleGlobalProps({...props})}
        `}
        {...props}
        >
            {children}
        </div>
    )
}

export default Box