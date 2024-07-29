import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function AppPage({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #fffff;
          background-image: url('');
          background-size: cover;
          background-position: center;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex-grow: 1;
        }
      `}
      </style>
      <Head>
        <link rel="icon" href="./logo-color.png" />
      </Head>x
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
  )
}


