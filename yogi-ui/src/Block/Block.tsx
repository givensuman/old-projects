import React from 'react'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLDivElement>

export const Block = ({
    children,
    ...props
}: Props) => {
    return (
        <div {...props} className='block'>
            {children}
        </div>
    )
}

const Component = makeComponent<Props>(Block)
export default Component
