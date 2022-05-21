import React from 'react'

import Bounce from './Bounce'

export default {
  title: 'Bounce',
  component: Bounce,
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
    radius: { control: 'number' },
    speed: { control: 'number' },
    size: { control: 'number' },
  },
}

const Template = (args: any) => <Bounce {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  radius: 10,
  speed: 1,
  size: 150,
}
