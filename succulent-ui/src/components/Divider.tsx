import React from 'react'
import styled from '@emotion/styled'

import { theme } from '../utils/theme'

interface StyleProps {
    css?: string
}

const DividerUI = styled.hr<StyleProps>`
    display: block;
    border: none;
    border-radius: 0.025em;
    
    border-top: solid 2px ${theme.primary.dark};

    ${props => props.css ? props.css : null}
`
interface Props {
    children?: never
}

export const Divider = ({ ...props }: Props) => 
    <DividerUI {...props} />