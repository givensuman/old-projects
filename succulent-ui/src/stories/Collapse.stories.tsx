import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Collapse, Button } from '../index'

const meta: Meta = {
    title: 'Collapse',
    component: Collapse,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => {
    
    const [show, setShow] = React.useState(false)

    return (
        <>
        <Collapse show={show}>
            <span>This is a text block.</span>
        </Collapse>
        <Button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</Button>
        </>
    )

}

export const Default = Template.bind({})
Default.args = {
    size: 'md',
    css: ``,
    dividerCss: ``
}