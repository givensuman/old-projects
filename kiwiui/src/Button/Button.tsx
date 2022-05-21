/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useTheme from '../_theme/useTheme'
import handleTheme from '../_theme/handleTheme'

export interface StyleProps {
    type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning',
    variant?: 'solid' | 'ghost' | 'outline',
    size?: 'sm' | 'md' | 'lg' | 'block'
}

const Button = (
    { children, ...props }:
        React.HTMLAttributes<HTMLButtonElement> & GlobalProps & StyleProps
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


    const [sizing, setSizing] = useState('md')
    useEffect(() => {
        if (props.size) setSizing(props.size)
    }, [props.size])

    return (
        <button css={css`
        // Base
            border: none;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
            border: 2px solid transparent;
            border-radius: 0.3em;
            height: fit-content;
            text-align: center;

        // Theme
            background-color: ${color[0]};
            color: ${color[2]};
            &:hover {
                background-color: ${color[1]};
            }
            &:focus {
                border-color: ${color[1]};
            }    
            &:disabled {
                background-color: ${theme.colors.disabled};
                color: ${theme.colors.disabledText};
                cursor: not-allowed;
                &:hover {
                    background-color: ${theme.colors.disabled};
                }
                &:focus {
                    border-color: transparent;
                }
            }

        // Size
            width: ${sizing == 'block' ? '100%' : 'fit-content'};
            padding: ${sizing == 'sm' ? '0.25em' :
                    sizing == 'lg' ? '0.75em' :
                        '0.5em'
                };
            font-size: ${sizing == 'sm' ? '0.75em' :
                    sizing == 'lg' ? '1.5em' :
                        '1em'
                };

        // Variant
            ${props.variant == 'ghost' && `
                background-color: transparent;
                color: ${theme.colors.text};
                &:hover {
                    background-color: ${color[1]};
                    color: ${color[2]};
                }
                &:focus {
                    border-color: ${color[1]}
                }
            `}
            ${props.variant == 'outline' && `
                background-color: transparent;
                border-color: ${color[0]};
                color: ${theme.colors.text};
                &:hover {
                    color: ${color[2]}
                }
            `}

            ${handleTheme()}
        // Global
          ${handleGlobalProps({ ...props })}
        `}
        {...props}
        disabled={props.disabled}
        >
            {children}
        </button>
    )
}

export default Button