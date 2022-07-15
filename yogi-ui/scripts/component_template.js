// component.tsx
exports.component = name => 
`import React from 'react'
import classnames from 'classnames'
import makeComponent, { ComponentProps } from '../_yogi/makeComponent'

export type Props = {

} & ComponentProps<HTMLElement>

export const ${name} = ({
  children,
  ...props
}: Props) => {
  return (

  )
}

const Component = makeComponent<Props>(${name})
export default Component
`;

// component.stories.jsx
exports.story = name => 
`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ${name} } from './${name}'

export default {
  title: '${name}',
  component: ${name}
} as ComponentMeta<typeof ${name}>

const Template: ComponentStory<typeof ${name}> = (args) => 
  <${name} {...args}>Hi mom</${name}>

export const Default = Template.bind({})
`;

// index.ts
exports.barrel = name => 
`import ${name} from './${name}'
export default ${name}
`;
