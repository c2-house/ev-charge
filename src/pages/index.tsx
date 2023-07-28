import { Inter } from 'next/font/google';
import Head from 'next/head';
import Homepage from '@/components/Home';
import { Container } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={inter.className} maxW='8xl' p={0}>
        <Homepage />
      </Container>
    </>
  );
}
