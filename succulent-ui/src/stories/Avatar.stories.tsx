import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Avatar } from '../index'

const meta: Meta = {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: 'radio'
        }
    }
}

export default meta

const Template = (args: any) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    name: 'GS',
    size: 'md',
    css: ``
}