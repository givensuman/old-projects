import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TagGroup } from './TagGroup'
import { Tag } from '../Tag/Tag'

export default {
  title: 'TagGroup',
  component: TagGroup
} as ComponentMeta<typeof TagGroup>

const Template: ComponentStory<typeof TagGroup> = (args) => 
  <TagGroup {...args}>
    <Tag>Hi mom</Tag>
    <Tag dismissable>Hi mom</Tag>
    <Tag>Hi mom</Tag>
  </TagGroup>

export const Default = Template.bind({})