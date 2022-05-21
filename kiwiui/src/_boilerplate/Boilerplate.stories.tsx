import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'

import Boilerplate from '.'

export default  {
    title: 'Boilerplate',
    component: Boilerplate
} as ComponentMeta<typeof Boilerplate>

const Template = (args: GlobalProps) => 
    <></>

export const Default = Template.bind({})
