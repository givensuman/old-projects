import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container } from './Container'
import { Alert } from '../Alert/Alert'

export default {
  title: 'Container',
  component: Container
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => 
  <Container {...args}>
    <Alert variant='primary'>Hi mom</Alert>
  </Container>

export const Default = Template.bind({})
