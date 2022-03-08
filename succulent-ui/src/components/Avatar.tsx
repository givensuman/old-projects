import React from 'react'
import styled from '@emotion/styled'

import { square, sizing } from '../utils/units'
import { theme } from '../utils/theme'

interface StyleProps {
    css?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const AvatarUI = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: solid 2px ${theme.primary.dark};
    background-color: ${theme.primary.light};
    font-size: ${props => props.size ? sizing[props.size] : sizing['md']};
    height: ${props => props.size ? square[props.size] : square['md']};
    width: ${props => props.size ? square[props.size] : square['md']};

    ${props => props.css ? props.css : null}
`

interface Props {
    children?: never,
    src?: string,
    name: string
}

export const Avatar = ({ name, ...props }: Props) => 
    <AvatarUI>{'GS'}</AvatarUI>