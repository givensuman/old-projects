import React, { useState } from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { VariantType } from '../_yogi/types'

export type Props = {
    light?: boolean,
    dismissable?: boolean,
    variant?: VariantType
} & ComponentProps<HTMLDivElement>

export const Alert = ({
    children,
    dismissable = true,
    ...props
}: Props) => {
    const [ show, setShow ] = useState(true)
    return (
        <>
        {show &&
        <div
        {...props}
        className={classnames('notification', {
            'is-light': props.light,
            [`is-${props.variant}`]: props.variant
        })}
        >
            {dismissable && 
            <button 
            className="delete"
            onClick={() => setShow(false)}
            />
            }
            {children}
        </div>
        }
        </>
    )
}

const Component = makeComponent<Props>(Alert)
export default Component