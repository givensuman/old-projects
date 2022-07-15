import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Delete } from './Delete'

export default {
  title: 'Delete',
  component: Delete
} as ComponentMeta<typeof Delete>

const Template: ComponentStory<typeof Delete> = (args) => 
  <Delete {...args} />

export const Default = Template.bind({})