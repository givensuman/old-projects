import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardImage } from './CardImage'
import { CardFooter } from './CardFooter'
import { CardFooterItem } from './CardFooterItem'

// @ts-ignore
import placeholder from '../../assets/placeholder.png'

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => 
  <Card {...args}>
    <CardImage src={placeholder} alt="Placeholder" ratio="1by3" />
    <CardHeader title="Hi mom" />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
    </CardContent>
    <CardFooter>
      <CardFooterItem>
        Peace
      </CardFooterItem>
      <CardFooterItem>
        And
      </CardFooterItem>
      <CardFooterItem>
        Love
      </CardFooterItem>
    </CardFooter>
  </Card>

export const Default = Template.bind({})
