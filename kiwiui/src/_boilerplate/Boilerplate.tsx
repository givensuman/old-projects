/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useTheme from '../_theme/useTheme'

export interface StyleProps {

}

const Boilerplate = (
    props: React.HTMLAttributes<HTMLDivElement> & GlobalProps & StyleProps
) => {

    const theme = useTheme()

    return (
        <div css={css`
        // Base

        // Theme

        // Global
            ${handleGlobalProps({...props})}
        `}
        {...props}
        />
    )
}

export default Boilerplate