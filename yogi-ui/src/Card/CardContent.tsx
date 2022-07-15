import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

import { Content, Props as ContentProps } from '../Content/Content'

export type Props = {
    
} & ComponentProps<HTMLDivElement> & ContentProps

export const CardContent = ({
  children,
  ...props
}: Props) => {
  return (
      <div className='card-content'>
        <Content {...props}>
            {children}
        </Content>
      </div>
  )
}

const Component = makeComponent<Props>(CardContent)
export default Component