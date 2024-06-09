import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'


export default function AppPage({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}


