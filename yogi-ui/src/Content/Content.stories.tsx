import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Content } from './Content'

export default {
  title: 'Content',
  component: Content
} as ComponentMeta<typeof Content>

const Template: ComponentStory<typeof Content> = (args) => 
  <Content {...args}>
    <h1>Hi mom</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
    </p>
  </Content>

export const Default = Template.bind({})