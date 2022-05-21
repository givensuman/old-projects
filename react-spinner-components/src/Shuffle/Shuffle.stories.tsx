import React from 'react'

import Shuffle from './Shuffle'

export default {
  title: 'Shuffle',
  component: Shuffle,
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
    radius: { control: 'number' },
    speed: { control: 'number' },
    size: { control: 'number' },
  },
}

const Template = (args: any) => <Shuffle {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  radius: 10,
  speed: 1,
  size: 150,
}
