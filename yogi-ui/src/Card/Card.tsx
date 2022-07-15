import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const Card = ({
  children,
  ...props
}: Props) => {
  return (
    <div {...props} className='card'>
      {children}
    </div>
  )
}

const Component = makeComponent<Props>(Card)
export default Component
