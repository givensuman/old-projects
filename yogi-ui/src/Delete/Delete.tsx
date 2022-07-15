import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
    size?: 'small' | 'normal' | 'medium' | 'large'
} & ComponentProps<HTMLButtonElement>

export const Delete = ({
    children,
    ...props
}: Props) => {
    return (
        <button
        {...props}
        className={classnames('delete', {
            [`is-${props.size}`]: props.size
        })}
        />
    )
}

const Component = makeComponent<Props>(Delete)
export default Component