/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useTheme from '../_theme/useTheme'
import handleTheme from '../_theme/handleTheme'

export interface StyleProps {
    type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning'
}

const Badge = (
    { children, ...props }:
        React.HTMLAttributes<HTMLSpanElement> & GlobalProps & StyleProps
) => {

    const theme = useTheme()

    const [color, setColor] = useState(
        [theme.colors.default, theme.colors.defaultAction, theme.colors.defaultText]
    )
    const switchColor = () => {
        let c = theme.colors
        switch (props.type) {
            case 'primary':
                return [c.primary, c.primaryAction, c.primaryText]
            case 'secondary':
                return [c.secondary, c.secondaryAction, c.secondaryText]
            case 'success':
                return [c.success, c.successAction, c.successText]
            case 'warning':
                return [c.warning, c.warningAction, c.warningText]
            case 'default':
                return [c.default, c.defaultAction, c.defaultText]
            default:
                [c.default, c.defaultAction]
        }
    }
    useEffect(() => {
        let typeColor = switchColor()
        if (typeColor) setColor(typeColor)
    }, [props.type])

    return (
        <span css={css`
        // Base
            display: inline-block;
            font-size: 0.8rem;
            border-radius: 0.3em;
            padding: 0.2rem 0.6em;
            cursor: default;
            width: fit-content;

        // Theme
            background-color: ${color[0]};
            color: ${color[2]};
            ${handleTheme()}

        // Global
            ${handleGlobalProps({...props})}
        `}
        {...props}
        >
            {children}
        </span>
    )
}

export default Badge