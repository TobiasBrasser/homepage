import Styles from "./index.module.css";
import Head from 'next/head';
import Typewriter from 'typewriter-effect'
import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from 'react-icons/fa';


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
                      delay: 80,
                    }}
                    />
                </span>
              </h1> 
              <div className={Styles.buttonContainer}>  
                <a ><button className={Styles.aboutButton}>
                  <FaArrowDown className={Styles.icon} /> Über mich
                </button></a>
                <a className={Styles.link} href="./ausbildung"><button className={Styles.nextButton}>
                Ausbildung <FaArrowRight className={Styles.icon} />
                </button></a>  
              </div> 
            </div>
        </div>
        
        <div className={Styles.about_me}>
          <h1 className={Styles.title_main}>Some title</h1>
          <p className={Styles.about_p}>kdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööökdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööökdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööökdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööökdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööökdfjslöööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööö</p>
        </div>
    </div>
  );
}

export default IndexPage;
