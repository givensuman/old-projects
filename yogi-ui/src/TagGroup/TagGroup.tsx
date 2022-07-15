import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { SizeType, AlignmentType } from '../_yogi/types'

export type Props = {
    attached?: boolean,
    size?: SizeType,
    alignment?: AlignmentType
} & ComponentProps<HTMLSpanElement>

export const TagGroup = ({
    children,
    ...props
}: Props) => {
    return (
        <div
        {...props}
        className={classnames('tags', {
            'has-addons': props.attached,
            [`are-${props.size}`]: props.size,
            [`is-${props.alignment}`]: props.alignment === 'right',
            [`is-${props.alignment}ed`]: props.alignment === 'center'
        })}
        >
            {children}
        </div>
    )
}

const Component = makeComponent<Props>(TagGroup)
export default Component