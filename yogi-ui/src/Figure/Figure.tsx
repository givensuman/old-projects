import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props =  {
    rounded?: boolean,
    square?: boolean,
    size?: '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128',
    ratio?: '1by1' | '1by2' | '1by3' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16'
} & ComponentProps<HTMLElement>

export const Figure = ({
    children,
    ...props
}: Props) => {
    return (
        <figure
        {...props}
        className={classnames('image', {
            'is-rounded': props.rounded,
            'is-square': props.square,
            [`is-${props.size}`]: props.size,
            [`is-${props.ratio}`]: props.ratio
        })}
        >
            {children}
        </figure>
    )
}

const Component = makeComponent<Props>(Figure)
export default Component