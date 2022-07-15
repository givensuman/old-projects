/** @jsxRuntime classic */
/** @jsx jsx */
import { ReactNode, HTMLAttributes } from 'react'
import { css as emotion, CSSObject, jsx } from '@emotion/react'

export interface Props {
    children?: ReactNode,
    css?: string | CSSObject,
    apply?: string | string[]
}

export type ComponentProps<T> = HTMLAttributes<T>

export default function makeComponent<T>(Component) {
    return (props: T & Props) => 
        <Component 
        {...props}
        css={props.css && (
            typeof props.css === 'string' 
            ? emotion`${props.css}` 
            : props.css
        )}
        />
}