import React, { ReactNode, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { padding, sizing } from '../utils/units'
import { theme } from '../utils/theme'

interface StyleProps {
    css?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'solid' | 'outlined' | 'ghost',
    error?: boolean,
    disabled?: boolean
}

const ButtonUI = styled.button<StyleProps>`
    cursor: pointer;
    border: none;
    border-radius: 0.25em;
    transition: background-color 0.25s ease;

    // Handle size prop
    ${props => {
        if (props.size) {
            return `
                padding: ${padding[props.size]};
                font-size: ${sizing[props.size]};
            `
        }
    }}

    // Handle variant prop
    ${props => {
        if (props.variant) {
            if (props.variant === 'outlined') {
                return `
                    box-shadow: 0px 0px 0px 1.25px ${theme.primary.light} inset;
                    background-color: transparent;
                    transition: box-shadow 0.25s ease;
                    &:hover {
                        box-shadow: 0px 0px 0px 1.25px ${theme.primary.dark} inset;
                    }
                `
            } else if (props.variant === 'ghost') {
                return `
                    background-color: transparent;
                    transition: background-color: 0.25s ease;
                    &:hover {
                        background-color: ${theme.primary.light};
                    }
                `
            } else {
                return `
                    background-color: ${theme.primary.light};
                    transition: background-color: 0.25s ease;
                    &:hover {
                        background-color: ${theme.primary.dark};
                    }
                `
            }
        }
    }}
    
    // Handle error prop
    ${props => props.error ? `
        background-color: ${theme.error.light};
        box-shadow: none;
        &:hover {
            background-color: ${theme.error.dark};
        }
    ` : null}

    // Handle disabled prop
    ${props => props.disabled ? `
        background-color: ${theme.disabled};
        box-shadow: none;
        pointer-events: none;
    ` : null}

    // Handle css prop
    ${props => props.css ? props.css : null}
`

interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export const Button = ({ children, ...props }: Props) => 
    <ButtonUI {...props}>{children}</ButtonUI>
