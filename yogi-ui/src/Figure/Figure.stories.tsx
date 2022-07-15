import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Figure } from './Figure'
// @ts-ignore
import placeholder from '../../assets/placeholder.png'

export default {
  title: 'Figure',
  component: Figure
} as ComponentMeta<typeof Figure>

const Template: ComponentStory<typeof Figure> = (args) => 
  <Figure {...args}>
      <img src={placeholder} alt="Placeholder" />
  </Figure>

export const Default = Template.bind({})