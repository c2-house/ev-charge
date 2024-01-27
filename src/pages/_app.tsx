import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/styles/theme';
import Layout from '@/components/Common/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#55cc88' />
          <meta name='msapplication-TileColor' content='#2b5797' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            name='google-site-verification'
            content='_oTPY5_t-Fx2udy0qyRx5Qp9uvKfQgN8z-nZrKZKfxI'
          />
          <meta name='naver-site-verification' content='b3044df87ae5838592940b7d467f77932ccd4063' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
