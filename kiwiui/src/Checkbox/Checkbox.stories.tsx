import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Checkbox'

import Checkbox from '.'

export default  {
    title: 'Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template = (args: GlobalProps & StyleProps) => 
    <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {

}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true
}