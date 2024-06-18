import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import { AuthProvider } from '../context/AuthContext'
import { global } from 'styled-jsx/css'

export default function AppPage({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      body {
        background-color: #fffff;
        background-image: url('/path/to/your/image.jpg');
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0;
        min-height: 100vh;
      }
    `}</style>
    <div>
      <Head>
        <link rel="icon" href="./logo-color.png" />
      </Head>
      <AuthProvider>
      <Navbar />
      
        <Component {...pageProps} />
      
      <Footer />
      </AuthProvider>
    </div>
    </>
  )
}


