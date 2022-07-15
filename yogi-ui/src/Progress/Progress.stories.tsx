import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Progress } from './Progress'

export default {
  title: 'Progress',
  component: Progress
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => 
  <Progress {...args} />

export const Value = Template.bind({})