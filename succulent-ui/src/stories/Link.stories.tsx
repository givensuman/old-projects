import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Link } from '../index'

const meta: Meta = {
    title: 'Link',
    component: Link,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => <Link {...args}>www.github.com</Link>

export const Underline = Template.bind({})
Underline.args = {
    variant: 'underline',
    css: ``
}

export const Slide = Template.bind({})
Slide.args ={
    variant: 'slide',
    css: ``
}