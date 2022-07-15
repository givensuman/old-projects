import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
  size?: 'medium' | 'large'
} & ComponentProps<HTMLElement>

export const Section = ({
  children,
  ...props
}: Props) => {
  return (
    <section
    {...props}
    className={classnames('section', {
      [`is-${props.size}`]: props.size
    })}
    >
      {children}
    </section>
  )
}

const Component = makeComponent<Props>(Section)
export default Component
