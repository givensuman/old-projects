import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { VariantType, SizeType } from '../_yogi/types'

export type Props = {
    variant?: VariantType,
    size?: SizeType
} & ComponentProps<HTMLProgressElement>

export const Progress = ({
    ...props
}: Props) => {
    return (
        <progress 
        {...props}
        className={classnames('progress', {
            [`is-${props.variant}`]: props.variant,
            [`is-${props.size}`]: props.size
        })}
        />
    )
}

const Component = makeComponent<Props>(Progress)
export default Component