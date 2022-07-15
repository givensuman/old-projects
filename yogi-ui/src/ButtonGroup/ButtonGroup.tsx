import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { AlignmentType, SizeType } from '../_yogi/types'

export type Props = {
    attached?: boolean,
    alignment?: AlignmentType,
    size?: SizeType
} & ComponentProps<HTMLDivElement>

export const ButtonGroup = ({
    children,
    ...props
}: Props) => {
    return (
        <div
        {...props}
        className={classnames('buttons', {
            'has-addons': props.attached,
            [`are-${props.size}`]: props.size,
            [`is-${props.alignment}`]: props.alignment === 'right',
            [`is-${props.alignment}ed`]: props.alignment === 'center'
        })}>
            {children}
        </div>
    )
}

const Component = makeComponent<Props>(ButtonGroup)
export default Component