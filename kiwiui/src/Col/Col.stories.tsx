import React from 'react'
import { ComponentMeta } from '@storybook/react'

import GlobalProps from '../_global/props'
import { StyleProps } from './Col'

import Col from '.'

export default  {
    title: 'Col',
    component: Col
} as ComponentMeta<typeof Col>

const Template = (args: GlobalProps & StyleProps) => 
    <Col {...args}>
        {Array(10).fill(null).map(() => <span>{'🥝'}</span>)}
    </Col>

export const Default = Template.bind({})
