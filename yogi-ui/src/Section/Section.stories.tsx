import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Section } from './Section'

export default {
  title: 'Section',
  component: Section
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => 
<>
<Section {...args}>
    <p>Hi mom</p>
</Section>
<Section {...args}>
    <p>Hi mom</p>
</Section>
</>


export const Default = Template.bind({})
