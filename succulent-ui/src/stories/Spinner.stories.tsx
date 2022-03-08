import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Spinner } from '../index'

const meta: Meta = {
    title: 'Spinner',
    component: Spinner,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => <Spinner {...args} />

export const Circle = Template.bind({})
Circle.args = {
    variant: 'circle',
    css: ``
}

export const Dots = Template.bind({})
Dots.args = {
    variant: 'dots',
    css: ``
}

export const CircleDots = Template.bind({})
CircleDots.args = {
    variant: 'circle-dots',
    css: ``
}