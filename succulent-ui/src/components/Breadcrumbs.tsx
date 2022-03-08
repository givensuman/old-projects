import React from 'react'
import styled from '@emotion/styled'

import { padding, sizing } from '../utils/units'
import { theme } from '../utils/theme'

// Breadcrumbs 

interface Props {
    children: any
}

const Nav = styled.nav`
    display: flex;
    flex-direction: row;

    ${props => props.css ? props.css : null}
`

export const Breadcrumbs = ({ children, ...props }: Props) => 
    <Nav>
   {React.Children.map(children, (child, index) => 
        React.cloneElement(child, { index: index, length: children.length, ...props })
    )}
    </Nav>

// BreadcrumbsItem 

interface StyleProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    dividerCss?: string
}

const StyledDivider = styled.svg<StyleProps>`
    padding: ${props => props.size ? padding[props.size] : padding['md']};
    height: ${props => props.size ? sizing[props.size] : sizing['md']};
    width: ${props => props.size ? sizing[props.size] : sizing['md']};
    stroke: ${theme.primary.dark};

    ${props => props.dividerCss ? props.dividerCss : null}
`

const Divider = () =>
<StyledDivider
viewBox="0 0 24 24"
fill="none"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<polyline points="9 18 15 12 9 6" />
</StyledDivider>


const BreadcrumbItemUI = styled.span<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: ${props => props.size ? sizing[props.size] : sizing['md']};
`

export const BreadcrumbItem = ({ children, ...props }) => 
    <BreadcrumbItemUI {...props}>
        {children}
        {props.index < props.length - 1 ? 
        <Divider {...props} /> : null}
    </BreadcrumbItemUI>