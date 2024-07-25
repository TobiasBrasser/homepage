import Styles from './Footer.module.css';
import ImpressumModal from './ImpressumModal';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.content}>
        <div className={Styles.legal}>
          <h4 className={Styles.h4}>Rechtliches</h4>
          <hr className={Styles.hr}></hr>
          <p className={Styles.p}>&copy; {new Date().getFullYear()} Tobias Brasser. All rights reserved.</p>
          <ImpressumModal />
        </div>
        <div className={Styles.contact}>
          <h4 className={Styles.h4}>Kontakt</h4>
          <hr className={Styles.hr}></hr>
          <ul className={Styles.socialLinks}>
            <li className={Styles.li}><a href="https://facebook.com" target="_blank"><img className={Styles.linkedin} src="./linkedin.png" alt="LinkedIn" ></img></a></li>
            <li className={Styles.li}><a href="https://github.com/TobiasBrasser"><img className={Styles.github} src="./github.png" alt="GitHub" ></img></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
