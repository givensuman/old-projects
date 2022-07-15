import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => 
  <ButtonGroup {...args}>
      <Button>Hi mom</Button>
      <Button>Hi mom</Button>
      <Button>Hi mom</Button>
  </ButtonGroup>

export const Default = Template.bind({})