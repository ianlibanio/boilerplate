import { Meta, Story } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Next.JS Boilerplate',
    description:
      'A boilerplate using TypeScript, ReactJS, NextJS and Styled Components'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
