import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from './Alert'

export default {
  title: 'Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => 
  <Alert {...args}>
      <h1>Alert</h1>
      You're looking mad cute today
  </Alert>

export const Default = Template.bind({})