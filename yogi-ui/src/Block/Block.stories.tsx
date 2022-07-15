import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Block } from './Block'

export default {
  title: 'Block',
  component: Block
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => 
<>
  <Block {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
  </Block>
  <Block {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
  </Block>
  <Block {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
  </Block>
</>

export const Default = Template.bind({})