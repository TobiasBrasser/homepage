import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <p>&copy; {new Date().getFullYear()} Tobias Brasser. All rights reserved.</p>
        <ul className={Styles.socialLinks}>
          <li><a href="https://facebook.com" target="_blank"><img className={Styles.linkedin} src="./linkedin.png"></img></a></li>
          <li><a href="https://github.com/TobiasBrasser"><img className={Styles.github} src="./github.png"></img></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
