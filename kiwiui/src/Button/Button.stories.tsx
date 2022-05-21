import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { StyleProps } from './Button'
import GlobalProps from '../_global/props'

import Button from '.'

export default  {
    title: 'Button',
    component: Button,
    argTypes: {
        type: { control: 'radio' }
    }
} as ComponentMeta<typeof Button>

type Args = GlobalProps & StyleProps

const Template = (args: Args) => 
    <Button {...args}>Click Me</Button>

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
}

export const Variant = (args: Args) => {
    const variants = [
        'solid', 'ghost', 'outline'
    ] as const
    return (
        <div style={divStyle}>
        {variants.map(variant => <Template variant={variant} {...args} />)}
        </div>
    )
}

export const Type = (args: Args) => {
    const types = [
        'default', 'primary', 'secondary', 'success', 'warning'
    ] as const
    return (
        <div style={divStyle}>
        {types.map(type => <Template type={type} {...args} />)}
        </div>
    )
}

export const Size = (args: Args) => {
    const sizes = [
        'sm', 'md', 'lg', 'block'
    ] as const
    return (
        <div style={divStyle}>
        {sizes.map(size => <Template size={size} {...args} />)}
        </div>
    )
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true
}