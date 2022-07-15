import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
  fluid?: boolean,
  size?: 'widescreen' | 'fullhd',
  max?: 'desktop' | 'widescreen'
} & ComponentProps<HTMLDivElement>

export const Container = ({
  children,
  ...props
}: Props) => {
  return (
    <div
    {...props}
    className={classnames('container', {
      'is-fluid': props.fluid,
      [`is-${props.size}`]: props.size,
      [`is-${props.max}`]: props.max
    })}
    >
      {children}
    </div>
  )
}

const Component = makeComponent<Props>(Container)
export default Component
