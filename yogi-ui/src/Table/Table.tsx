import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { VariantType, SizeType } from '../_yogi/types'

export type Props = {
    bordered?: boolean,
    striped?: boolean,
    narrow?: boolean,
    hoverable?: boolean,
    fullWidth?: boolean
} & ComponentProps<HTMLTableElement>

export const Table = ({
    children,
    ...props
}: Props) => {
    return (
        <table 
        {...props}
        className={classnames('table', {
            'is-bordered': props.bordered,
            'is-striped': props.striped,
            'is-narrow': props.narrow,
            'is-hoverable': props.hoverable,
            'is-fullwidth': props.fullWidth
        })}
        >
            {children}
        </table>
    )
}