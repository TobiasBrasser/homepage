import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <p>&copy; {new Date().getFullYear()} Tobias Brasser. All rights reserved.</p>
        <ul className={Styles.socialLinks}>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
