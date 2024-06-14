import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import { AuthProvider } from '../context/AuthContext'

export default function AppPage({ Component, pageProps }) {
  return (
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
  )
}


