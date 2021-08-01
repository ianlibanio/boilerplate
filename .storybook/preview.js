import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { GlobalStyle } from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
