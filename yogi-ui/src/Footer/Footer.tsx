import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLElement>

export const Footer = ({
  children,
  ...props
}: Props) => {
  return (
    <footer {...props} className='footer'>
      {children}
    </footer>
  )
}

const Component = makeComponent<Props>(Footer)
export default Component
