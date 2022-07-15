import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { VariantType, SizeType } from '../_yogi/types'

export type Props = {
    light?: boolean,
    responsive?: boolean,
    outlined?: boolean,
    inverted?: boolean,
    rounded?: boolean,
    hovered?: boolean,
    focused?: boolean,
    active?: boolean,
    loading?: boolean,
    static?: boolean,
    disabled?: boolean,
    fullWidth?: boolean,
    selected?: boolean,
    size?: SizeType,
    variant?: VariantType,
} & ComponentProps<HTMLButtonElement>

export const Button = ({ 
    children,
    ...props
 }: Props) => {
    return (
        <button 
        {...props}
        className={classnames('button', {
            'is-light': props.light,
            'is-responsive': props.responsive,
            'is-outlined': props.outlined,
            'is-inverted': props.inverted,
            'is-rounded': props.rounded,
            'is-hovered': props.hovered,
            'is-focused': props.focused,
            'is-active': props.active,
            'is-loading': props.loading,
            'is-static': props.static,
            'is-fullwidth': props.fullWidth,
            'is-selected': props.selected,
            [`is-${props.size}`]: props.size,
            [`is-${props.variant}`]: props.variant
        })}>
            {children}
        </button>
    )
}

const Component = makeComponent<Props>(Button)
export default Component