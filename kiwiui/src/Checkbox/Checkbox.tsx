/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useColorsByType from '../_theme/useColorsByType'

// @ts-ignore
import check from './check.svg'
import useTheme from '../_theme/useTheme'

export interface StyleProps {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning',
    size?: 'sm' | 'md' | 'lg',
    label?: string
}

const Checkbox = (
    props: React.HTMLAttributes<HTMLInputElement> & GlobalProps & StyleProps
) => {

    const theme = useTheme()
    const [color, colorAction, colorText] = useColorsByType(props.variant)

    return (
        <input
            type="checkbox"
            css={css`
            // Base
                cursor: pointer;
                appearance: none;
                -webkit-appearance: none;
                border-radius: 0.3em;
                border: solid 0.2em transparent;
                transition: background-color 0.2s;
                display: flex;
                justify-content: center;
                align-items: center;
                &:before {
                    display: none;
                    content: "ok";
                    font-size: 50px;
                    color: ${colorText};
                }
                &:checked {
                    &:before {
                        display: block;
                    }
                }
                &:focus {
                    border-color: ${colorAction};
                }
            
            // Size
                height: ${props.size == 'sm' ? '1em' :
                props.size == 'lg' ? '2em' :
                '1.5em'
                };
                width: ${props.size == 'sm' ? '1em' :
                props.size == 'lg' ? '2em' :
                '1.5em'
                };
                &:before {
                    font-size: ${props.size == 'sm' ? '0.5em' :
                    props.size == 'lg' ? '1.5em' :
                    '1em'
                    };
                }
            
            // Theme
                background-color: ${color};
                &:hover {
                    background-color: ${colorAction};
                }
                &:disabled {
                    cursor: not-allowed;
                    background-color: ${theme.colors.disabled};
                    color: ${theme.colors.disabledText};
                }
            
            // Global
                ${handleGlobalProps(props)}
            `}
            {...props}
        />
    )
}

export default Checkbox