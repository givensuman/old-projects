import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'

import Box from '.'

export default  {
    title: 'Box',
    component: Box
} as ComponentMeta<typeof Box>

const Template = (args: GlobalProps) => 
    <Box {...args}>
        {Array(10).fill(null).map(() => <span>{'🥝'}</span>)}
    </Box>

export const Default = Template.bind({})