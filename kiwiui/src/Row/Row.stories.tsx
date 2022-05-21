import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Row'

import Row from '.'

export default  {
    title: 'Row',
    component: Row
} as ComponentMeta<typeof Row>

const Template = (args: GlobalProps & StyleProps) => 
    <Row {...args}>
        {Array(10).fill(null).map(() => <span>{'🥝'}</span>)}
    </Row>

export const Default = Template.bind({})