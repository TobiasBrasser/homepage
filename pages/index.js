import React from 'react'
import Styles from "./index.module.css"
import Footer from '../components/Footer'
import Head from 'next/head'



function IndexPage() {
  return (
    <>
        <Head>
                <title>Home</title>
                <meta name="description" content="Beschreibung der Startseite" />
                <link rel="icon" href="../public/logo.png" />
        </Head>

        <div className={Styles.gallery}>
            {/* <img className={Styles.image} src="/panda.JPG" /> */}
            <div className={Styles.textBox}>
              <h1 className={Styles.title}>Herzlich Willkommen zu meiner Homepage</h1>
            </div>
        </div>
        <Footer />
    </>
  ) /** Test */
}

export default IndexPage
