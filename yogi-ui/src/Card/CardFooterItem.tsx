import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const CardFooterItem = ({
  children,
  ...props
}: Props) => {
  return (
      <div {...props} className='card-footer-item'>
          {children}
      </div>
  )
}

const Component = makeComponent<Props>(CardFooterItem)
export default Component