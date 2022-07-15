import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image } from './Image'

export default {
  title: 'Image',
  component: Image
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => 
  <Image {...args}>Hi mom</Image>

export const Default = Template.bind({})
