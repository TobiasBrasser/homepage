import React from 'react';
import Styles from "./index.module.css";
import Head from 'next/head';
import Typewriter from 'typewriter-effect'
import about from './about'

function IndexPage() {
  return (
    <div className={Styles.body}>
        <Head>
                <title>Home</title>
                <meta name="description" content="Beschreibung der Startseite" />
                <link rel="icon" href="../public/logo.png" />
        </Head>

        <div className={Styles.gallery}>
            <div className={Styles.textBox}>
              <h1 className={Styles.title}>
                <span className={Styles.title_span}>Herzlich Willkommen!</span>
                <span className={Styles.title_span}>Mein Name ist <span className={Styles.p_red}>Tobias Brasser</span></span>
                <span className={Styles.title_span}>
                  <Typewriter
                    options={{
                      strings: [
                        "Lernender an der IMS",
                        "Auszubildender in Informatik"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    />
                </span>
              </h1>
            </div>

        </div>
    </div>
  );
}

export default IndexPage;
