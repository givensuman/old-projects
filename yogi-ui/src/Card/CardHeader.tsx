import React, { ReactNode } from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {
    title: string,
    icon?: ReactNode
} & ComponentProps<HTMLElement>

export const CardHeader = ({
  ...props
}: Props) => {
  return (
      <header className='card-header'>
            <p className='card-header-title'>
                {props.title}
            </p>
            {props.icon && 
            <div className='card-header-icon'>
                {props.icon}
            </div>
            }
      </header>
  )
}

const Component = makeComponent<Props>(CardHeader)
export default Component