import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from './Box'

export default {
  title: 'Box',
  component: Box
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => 
    <Box>Hi mom</Box>

export const Default = Template.bind({})