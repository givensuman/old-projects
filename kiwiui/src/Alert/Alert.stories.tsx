import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Alert'

import Alert from '.'

export default  {
    title: 'Alert',
    component: Alert
} as ComponentMeta<typeof Alert>

const Template = (args: GlobalProps & StyleProps) => 
    <Alert 
        title='This is an alert'
        subtitle='It contains important information'
        {...args} 
    />

export const Type = () => {
    const types = [
        'default', 'primary', 'secondary', 'success', 'warning'
    ] as const
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {types.map(type => <Template mt={'5px'} type={type} />)}
        </div>
    )
}