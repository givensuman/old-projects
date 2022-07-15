import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { SizeType, AlignmentType } from '../_yogi/types'

export type Props = {
    subtitle?: boolean,
    size?: 1 | 2 | 3 | 4 | 5 | 6
} & ComponentProps<HTMLHeadingElement>

export const Title = ({
    children,
    ...props
}: Props) => {
    return (
        <>
        {props.subtitle 
        ? <h2 
        {...props}
        className={classnames('subtitle', {
            [`is-${props.size}`]: props.size
        })}
        >
            {children}
        </h2>
        : <h1
        {...props}
        className={classnames('title', {
            [`is-${props.size}`]: props.size
        })}
        >
            {children}
        </h1>
        }
        </>
    )
}