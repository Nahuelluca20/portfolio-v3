import React from 'react';
import '../styles/globals.css';
import '../styles/animations.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/nav';
import customTheme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Nahuel Luca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/nahuel.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
