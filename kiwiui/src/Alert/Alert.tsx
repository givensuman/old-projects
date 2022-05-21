/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useColorsByType from '../_theme/useColorsByType'
import useTheme from '../_theme/useTheme'

export interface StyleProps {
    type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning',
    title?: string,
    subtitle?: string
}

const Alert = (
    props: React.HTMLAttributes<HTMLDialogElement> & GlobalProps & StyleProps
) => {

    const theme = useTheme()
    const [color, colorAction, colorText] = useColorsByType(props.type)

    return (
        <div css={css`
        // Base
            border-radius: 0.3em;
            width: fit-content;
            height: fit-content;
            min-width: 300px;
            padding: 0.5em;
            cursor: default;

            p {
                margin: 0;
                &:nth-of-type(1) {
                    font-size: 1.5rem;
                }
            }

        // Theme
            color: ${colorText};
            background-color: ${color};
            border: solid 0.2em ${colorAction};

        // Global
            ${handleGlobalProps(props)}
        `}
        >
            <p>{props.title}</p>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    )
}

export default Alert