import { Meta, Story } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS and Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
