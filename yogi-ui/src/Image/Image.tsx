import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'
import { Figure, Props as FigureProps } from '../Figure/Figure'

export type Props = {
  src: string,
  alt: string
} & ComponentProps<HTMLImageElement> & FigureProps

export const Image = ({
  children,
  ...props
}: Props) => {
  return (
    <Figure {...props}>
      <img
      {...props}
      src={props.src}
      alt={props.alt}
      className={classnames('image', {
        'is-rounded': props.rounded
      })}
      />
    </Figure>
  )
}

const Component = makeComponent<Props>(Image)
export default Component
