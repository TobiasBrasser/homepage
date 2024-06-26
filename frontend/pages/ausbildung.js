import React from 'react';
import Styles from './ausbildung.module.css';
import { FaGraduationCap, FaSchool, FaUserGraduate, FaCertificate } from 'react-icons/fa';
import Head from 'next/head';

const Ausbildung = () => {
    return (
        <>
        <Head>
                <title>Ausbildung</title>
                <meta name="description" content="Beschreibung der Startseite" />
                <link rel="icon" href="../public/logo.png" />
        </Head>
        <h1 className={Styles.title}>Schullaufbahn - Ausbildung</h1>
        <div className={Styles.timelineContainer}>
            <ul className={Styles.timeline}>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemOdd}`}>
                    <div className={Styles.timelineIcon}>
                        <FaGraduationCap />
                    </div>
                    <div className={Styles.timelineContent}>
                        <div>
                            <h3>Primarstufe</h3>
                            <div>Schulische Grundausbildung</div>
                            <div>Oberbipp BE</div>
                            <button className={Styles.details}>Details</button>
                        </div>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemEven}`}>
                    <div className={Styles.timelineIcon}>
                        <FaSchool />
                    </div>
                    <div className={Styles.timelineContent}>
                        <div>
                            <h3>Primarstufe</h3>
                            <div>Schulische Grundausbildung</div>
                            <div>Oberbipp BE</div>
                            <button className={Styles.details}>Details</button>
                        </div>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemOdd}`}>
                    <div className={Styles.timelineIcon}>
                        <FaUserGraduate />
                    </div>
                    <div className={Styles.timelineContent}>
                        <div>
                            <h3>Primarstufe</h3>
                            <div>Schulische Grundausbildung</div>
                            <div>Oberbipp BE</div>
                            <button className={Styles.details}>Details</button>
                        </div>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemEven}`}>
                    <div className={Styles.timelineIcon}>
                        <FaCertificate />
                    </div>
                    <div className={Styles.timelineContent}>
                        <div>
                            <h3>Primarstufe</h3>
                            <div>Schulische Grundausbildung</div>
                            <div>Oberbipp BE</div>
                            <button className={Styles.details}>Details</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Ausbildung;
