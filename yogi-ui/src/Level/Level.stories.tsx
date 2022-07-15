import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Level } from './Level'
import { SubLevel } from './SubLevel'
import { LevelItem } from './LevelItem'

export default {
  title: 'Level',
  component: Level
} as ComponentMeta<typeof Level>

const Template: ComponentStory<typeof Level> = (args) => 
  <Level {...args}>
    <SubLevel side='left'>
      <LevelItem>
        Hi cutie
      </LevelItem>
    </SubLevel>
    <SubLevel side='right'>
      <LevelItem>
        Hope you're well
      </LevelItem>
      <LevelItem>
        ✌
      </LevelItem>
    </SubLevel>
  </Level>

export const Default = Template.bind({})
