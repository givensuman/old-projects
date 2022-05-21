/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'

export interface StyleProps {
    center?: boolean,
    centerX?: boolean,
    centerY?: boolean,
    top?: boolean,
    bottom?: boolean,
    left?: boolean,
    right?: boolean
}

const Row = (
    { children, ...props }: React.HTMLAttributes<HTMLDivElement> & GlobalProps & StyleProps
) => {
    return (
        <div css={css`
        // Base
            display: flex;
            flex-direction: row;
            width: fit-content;
            height: fit-content;
        
        // Style
            align-items: ${
                (props.center || props.centerY) ? 'center' :
                props.bottom ? 'flex-end' :
                props.top ? 'flex-start' :
                'stretch'
            };
            
            justify-content: ${
                (props.center || props.centerX) ? 'center' :
                props.right ? 'flex-end' : 
                props.left ? 'flex-start' : 
                'stretch'
            };
        
        // Global
            ${handleGlobalProps({...props})}
        `}
        {...props}
        >
            {children}
        </div>
    )
}
export default Row
