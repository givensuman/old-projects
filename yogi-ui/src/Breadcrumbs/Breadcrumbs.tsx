import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { AlignmentType } from '../_yogi/types'

export type Props = {

} & ComponentProps<HTMLElement>

const Breadcrumbs = ({
    children,
    ...props
}: Props) => {
    return (
        <nav
        {...props}
        >
            <ul>
                {children}
            </ul>
        </nav>
    )
}