import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

import { Image, Props as ImageProps } from '../Image/Image'

export type Props = {
    src: string,
    alt: string
} & ComponentProps<HTMLImageElement> & ImageProps

export const CardImage = ({
  children,
  ...props
}: Props) => {
  return (
      <div className='card-image'>
          <Image {...props} />
      </div>
  )
}

const Component = makeComponent<Props>(CardImage)
export default Component
