import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
    side: 'left' | 'right'
} & ComponentProps<HTMLDivElement>

export const SubLevel = ({
  children,
  ...props
}: Props) => {
  return (
    <div
    {...props} 
    className={classnames({
        [`level-${props.side}`]: props.side
    })}
    >
      {children}
    </div>
  )
}

const Component = makeComponent<Props>(SubLevel)
export default Component
