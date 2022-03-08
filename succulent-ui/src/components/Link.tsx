import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import { theme } from '../utils/theme'

interface StyleProps {
    css?: string,
    variant?: 'underline' | 'slide'
}

const LinkUI = styled.a<StyleProps>`
    cursor: pointer;
    text-decoration: underline;
    color: ${theme.link.light};
    transition: color 0.25s ease;

    // Handle variant prop
    ${props => {
        if (props.variant) {
            if (props.variant === 'slide') {
                return `
                    text-decoration: none;
                    background-image: linear-gradient(to bottom, transparent 96%, ${theme.link.dark} 0);
                    background-size: 0% 100%;
                    background-repeat: no-repeat;
                    transition: background-size .4s ease;
                    &:hover {
                        background-size: 100% 100%;
                        color: ${theme.link.dark};
                `
            } else {
                    return `
                        &:hover {
                            color: ${theme.link.dark};
                        }
                    `
                }
            }
        }
    }}

    // Handle css prop
    ${props => props.css ? props.css : null}
`

interface Props {
    children: ReactNode
}

export const Link = ({ children, ...props }: Props) =>
    <LinkUI {...props}>{children}</LinkUI>