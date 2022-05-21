import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Avatar'

import Avatar from '.'

export default  {
    title: 'Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>

const Template = (args: GlobalProps & StyleProps) => 
    <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    name: "Spider Man"
}