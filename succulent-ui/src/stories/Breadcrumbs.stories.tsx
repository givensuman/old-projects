import React from 'react'
import { Meta } from '@storybook/react'

import './_stories.css'

import { Breadcrumbs, BreadcrumbItem } from '../index'

const meta: Meta = {
    title: 'Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
    }
}

export default meta

const Template = (args: any) => 
<Breadcrumbs {...args}>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Profile</BreadcrumbItem>
    <BreadcrumbItem>Settings</BreadcrumbItem>
</Breadcrumbs>

export const Default = Template.bind({})
Default.args = {
    size: 'md',
    css: ``,
    dividerCss: ``
}
