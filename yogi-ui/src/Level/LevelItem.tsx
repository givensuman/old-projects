import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const LevelItem = ({
  children,
  ...props
}: Props) => {
  return (
    <div {...props} className='level-item'>
        {children}
    </div>
  )
}

const Component = makeComponent<Props>(LevelItem)
export default Component
