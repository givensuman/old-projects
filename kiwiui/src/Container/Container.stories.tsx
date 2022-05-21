import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'

import Container from '.'

export default  {
    title: 'Container',
    component: Container
} as ComponentMeta<typeof Container>

const Template = (args: GlobalProps) => 
    <Container {...args}>
        {Array(10).fill(null).map(() => <span>{'🥝'}</span>)}
    </Container>

export const Default = Template.bind({})