import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
  mobile?: boolean
} & ComponentProps<HTMLElement>

export const Level = ({
  children,
  ...props
}: Props) => {
  return (
    <nav
    {...props}
    className={classnames('level', {
      'is-mobile': props.mobile
    })}
    >
      {children}
    </nav>
  )
}

const Component = makeComponent<Props>(Level)
export default Component
