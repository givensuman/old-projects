import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Badge, Button, Divider } from '../index'

const meta: Meta = {
    title: 'Badge',
    component: Badge,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => {
    const [counter, setCounter] = React.useState(0)

    return (
        <>
            <Badge {...args}>{counter}</Badge> new likes!
            <Divider />
            <Button onClick={() => setCounter(counter + 1)}>(+)</Button>
            <Divider />
            <Badge {...args}>Verified on github</Badge>
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    css: ``
}