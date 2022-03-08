import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import { padding, sizing } from '../utils/units'
import { theme } from '../utils/theme'

interface StyleProps {
    css?: string
}

const BadgeUI = styled.span<StyleProps>`
    border-radius: 0.25em;
    cursor: default;

    background-color: ${theme.primary.light};
    padding: ${padding['xs']};
    font-size: ${sizing['md']};

    ${props => props.css ? props.css : null}
`

interface Props {
    children: ReactNode
}

export const Badge = ({ children, ...props }: Props) =>
    <BadgeUI {...props}>{children}</BadgeUI>