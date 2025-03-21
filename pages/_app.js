import Head from "next/head";
import '@/styles/globals.css';
import React from "react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Profile Creator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );}
