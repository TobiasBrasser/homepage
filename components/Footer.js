import React from 'react';
import Styles from './Footer.module.css';
import ImpressumModal from './ImpressumModal';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.background}>
        <svg
          className={Styles.svg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="10%"
          height="80%"
          viewBox="0 0 1600 800"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgba(237, 38, 71, 0.6)" }} />
              <stop offset="100%" style={{ stopColor: "rgba(237, 38, 71, 0.06)" }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <div className={Styles.content}>
        <p className={Styles.p}>&copy; {new Date().getFullYear()} Tobias Brasser. All rights reserved.</p>
        <ul className={Styles.socialLinks}>
          <li className={Styles.li}><a href="https://facebook.com" target="_blank"><img className={Styles.linkedin} src="./linkedin.png" alt="LinkedIn"></img></a></li>
          <li className={Styles.li}><a href="https://github.com/TobiasBrasser"><img className={Styles.github} src="./github.png" alt="GitHub"></img></a></li>
        </ul>
        {/* <p className={Styles.p_Modal}></p> */}
      </div>
    </footer>
  );
};

export default Footer;
