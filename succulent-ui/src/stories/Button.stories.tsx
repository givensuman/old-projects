import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Button } from '../index'

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: 'radio'
        }
    }
}

export default meta

const Template = (args: any) => <Button {...args}>Click Me</Button>

export const Solid = Template.bind({})
Solid.args = {
    variant: 'solid',
    size: 'md',
    error: false,
    disabled: false,
    css: ``
}

export const Outlined = Template.bind({})
Outlined.args = {
    variant: 'outlined',
    size: 'md',
    error: false,
    disabled: false,
    css: ``
}

export const Ghost = Template.bind({})
Ghost.args = {
    variant: 'ghost',
    size: 'md',
    error: false,
    disabled: false,
    css: ``
}