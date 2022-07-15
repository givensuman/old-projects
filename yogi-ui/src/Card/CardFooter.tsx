import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const CardFooter = ({
  children,
  ...props
}: Props) => {
  return (
      <div {...props} className='card-footer'>
          {children}
      </div>
  )
}

const Component = makeComponent<Props>(CardFooter)
export default Component