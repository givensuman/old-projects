import React, { useState } from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { VariantType } from '../_yogi/types'

export type Props = {
    rounded?: boolean,
    dismissable?: boolean,
    light?: boolean,
    variant?: VariantType,
    size?: 'normal' | 'medium' | 'large'
} & ComponentProps<HTMLSpanElement>

export const Tag = ({
    children,
    ...props
}: Props) => {
    const [ show, setShow ] = useState(true)
    return (
        <>
        {show && 
        <span
        {...props}
        className={classnames('tag', {
            'is-rounded': props.rounded,
            'is-light': props.light,
            [`is-${props.variant}`]: props.variant,
            [`is-${props.size}`]: props.size
        })}
        >
            {children}
            {props.dismissable && 
            <button 
            className='delete'
            onClick={() => setShow(false)}
            />
            }
        </span>
        }
        </>
    )
}

const Component = makeComponent<Props>(Tag)
export default Component