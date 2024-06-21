import React from 'react';
import Styles from './ausbildung.module.css';
import { FaGraduationCap, FaSchool, FaUserGraduate, FaCertificate } from 'react-icons/fa';

const Ausbildung = () => {
    return (
        <>
        <h1 className={Styles.title}>Schullaufbahn - Ausbildung</h1>
        <div className={Styles.timelineContainer}>
            <ul className={Styles.timeline}>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemOdd}`}>
                    <div className={Styles.timelineIcon}>
                        <FaGraduationCap />
                    </div>
                    <div className={Styles.timelineContent}>
                        <h3>2020</h3>
                        <p>Beginn der Ausbildung</p>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemEven}`}>
                    <div className={Styles.timelineIcon}>
                        <FaSchool />
                    </div>
                    <div className={Styles.timelineContent}>
                        <h3>2021</h3>
                        <p>Erstes Jahr abgeschlossen</p>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemOdd}`}>
                    <div className={Styles.timelineIcon}>
                        <FaUserGraduate />
                    </div>
                    <div className={Styles.timelineContent}>
                        <h3>2022</h3>
                        <p>Zweites Jahr abgeschlossen</p>
                    </div>
                </li>
                <li className={`${Styles.timelineItem} ${Styles.timelineItemEven}`}>
                    <div className={Styles.timelineIcon}>
                        <FaCertificate />
                    </div>
                    <div className={Styles.timelineContent}>
                        <h3>2023</h3>
                        <p>Abschluss der Ausbildung</p>
                    </div>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Ausbildung;
