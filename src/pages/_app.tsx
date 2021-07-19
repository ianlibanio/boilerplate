import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.JS Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d1117" />
        <meta
          name="description"
          content="A boilerplate to work with TypeScript, NextJS and Styled Components"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://boilerplate.ianlibanio.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/ianlibanio/boilerplate/main/public/img/banner.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Boilerplate" key="ogsitename" />
        <meta property="og:title" content="Next.JS Boilerplate" key="ogtitle" />
        <meta
          property="og:description"
          content="A boilerplate to work with TypeScript, NextJS and Styled Components"
          key="ogdesc"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
