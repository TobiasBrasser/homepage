import React, { useState, useEffect, useContext, useCallback } from 'react';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    handleDocumentsClick();
  
  }, [menuOpen]);

  const handleDocumentsClick = useCallback(
    (e) => {
      if (isAuthenticated) {
        router.push('/dokumente');
      } else {
        router.push('/login');
      }
    },
    [isAuthenticated, router]
  );
  
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <div className={Styles.all}>
        <div className={Styles.leftSide}>
          <div className={`${Styles.burger} ${menuOpen ? Styles.open : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img className={Styles.logo} src='./logo.png' alt="Logo" />
        </div>
        
        <nav className={Styles.rightSide}>
          <ul className={Styles.nav_ul}>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/">Home</Link>
            </li> 
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/about">About</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/projekte">Projekte</Link>
            </li> 
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/hobbies">Hobbies</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <a onClick={handleDocumentsClick} className={Styles.nav_ul_li_a}>🔒 Dokumente</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${Styles.mainContent} ${menuOpen ? Styles.blurred : ''}`}>
        {/* Hauptinhalt der Seite */}
      </div>

      <nav className={`${menuOpen ? Styles.nav_open : Styles.nav_closed}`}>
        <ul className={Styles.nav_ul_mobile}>
        <img className={Styles.logoflyout} src="./logo.png" alt="Logo" />
          <li className={Styles.nav_ul_li}>
            <Link className={Styles.nav_ul_li_a} href="/">Home</Link>
          </li>
          <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/about">About</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link className={Styles.nav_ul_li_a} href="/projekte">Projekte</Link>
          </li>
          <li className={Styles.nav_ul_li}> 
            <Link className={Styles.nav_ul_li_a} href="/hobbies">Hobbies</Link>
          </li>
          <li className={Styles.nav_ul_li}>
              <a onClick={handleDocumentsClick} className={Styles.nav_ul_li_a}>🔒 Dokumente</a>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className={`${Styles.overlay} ${menuOpen ? Styles.visible : ''}`} onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
