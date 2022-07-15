import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title } from './Title'
import { Tag } from '../Tag/Tag'

export default {
  title: 'Title',
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => 
  <>
  <Title {...args}>Title</Title>
  <Title subtitle {...args}>Subtitle</Title>
  </>

export const Default = Template.bind({})