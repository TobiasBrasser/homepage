import React from 'react';
import Styles from './Footer.module.css';
import ImpressumModal from './ImpressumModal';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.content}>
        <p className={Styles.p}>&copy; {new Date().getFullYear()} Tobias Brasser. All rights reserved.</p>
        <ul className={Styles.socialLinks}>
        <li className={Styles.li}><ImpressumModal /></li>
          <li className={Styles.li}><a href="https://facebook.com" target="_blank"><img className={Styles.linkedin} src="./linkedin.png" alt="LinkedIn" /></a></li>
          <li className={Styles.li}><a href="https://github.com/TobiasBrasser"><img className={Styles.github} src="./github.png" alt="GitHub" /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
