import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Badge'

import Badge from '.'

export default  {
    title: 'Badge',
    component: Badge
} as ComponentMeta<typeof Badge>

const Template = (args: GlobalProps & StyleProps) => 
    <Badge {...args}>Read Me</Badge>

export const Type = () => {
    const types = [
        'default', 'primary', 'secondary', 'success', 'warning'
    ] as const
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {types.map(type => <Template type={type} />)}
        </div>
    )
}
