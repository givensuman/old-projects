/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback } from 'react'
import { css, jsx } from '@emotion/react'

import GlobalProps from '../_global/props'
import handleGlobalProps from '../_global/handleGlobalProps'
import useTheme from '../_theme/useTheme'

export interface StyleProps {
    name: string,
    color?: string,
    bgColor?: string,
    size?: 'sm' | 'md' | 'lg'
}

const Avatar = (
    { name, ...props }: 
    React.HTMLAttributes<HTMLDivElement> & GlobalProps & StyleProps
) => {

    const theme = useTheme()
    const getInitials = useCallback((fullName: string) => {
        const allNames = fullName.trim().split(' ')
        const initials = allNames.reduce((acc, curr, index) => {
          if(index === 0 || index === allNames.length - 1){
            acc = `${acc}${curr.charAt(0).toUpperCase()}`
          }
          return acc
        }, '')
        return initials
    }, [])


    return (
        <div css={css`
        // Base
            border-radius: 50%;
            height: 100px;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3em;

        // Style
            color: ${theme.colors.defaultText};
            background-color: ${theme.colors.default};
            border: solid 0.3em ${theme.colors.defaultAction};

        // Global
            ${handleGlobalProps({...props})}
        `}
        {...props}
        >
            {getInitials(name)}
        </div>
    )
}

export default Avatar