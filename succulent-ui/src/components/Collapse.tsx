import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface StyleProps {
    css?: string,
    show: boolean
}

const CollapseUI = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: max-height 5s ease;
    overflow: hidden;
    max-height: ${props => props.show ? '9999px' : '0'};

    ${props => props.css ? props.css : null}
`

interface Props {
    children: ReactNode,
    show: boolean
}

export const Collapse = ({ children, ...props}: Props) =>
    <CollapseUI show={props.show} {...props}>
        {children}
    </CollapseUI>