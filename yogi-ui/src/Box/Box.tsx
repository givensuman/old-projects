import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const Box = ({
    children,
    ...props
}: Props) => {
    return (
        <div {...props} className='box'>
            {children}
        </div>
    )
}

const Component = makeComponent<Props>(Box)
export default Component