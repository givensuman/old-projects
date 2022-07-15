import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
    size?: 'small' | 'normal' | 'medium' | 'large'
} & ComponentProps<HTMLDivElement>

export const Content = ({
    children,
    ...props
}: Props) => {
    return (
        <div
        {...props}
        className={classnames('content', {
            [`is-${props.size}`]: props.size
        })}
        >
            {children}
        </div>
    )
}

const Component = makeComponent<Props>(Content)
export default Component