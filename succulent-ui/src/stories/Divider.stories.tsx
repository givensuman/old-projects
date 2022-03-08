import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Divider } from '../index'

const meta: Meta = {
    title: 'Divider',
    component: Divider,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => <Divider {...args} />

export const Default = Template.bind({})
Default.args = {
    css: ``
}