import React, { useState, useEffect, useContext, useCallback } from 'react';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleDocumentsClick = useCallback(
    (e) => {
      if (!isAuthenticated) {
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
              <Link href="/" className={`${Styles.nav_ul_li_a} ${currentPath === '/' ? Styles.active : ''}`}>Home</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link href="/about" className={`${Styles.nav_ul_li_a} ${currentPath === '/about' ? Styles.active : ''}`}>About</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link href="/projekte" className={`${Styles.nav_ul_li_a} ${currentPath === '/projekte' ? Styles.active : ''}`}>Projekte</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link href="/hobbies" className={`${Styles.nav_ul_li_a} ${currentPath === '/hobbies' ? Styles.active : ''}`}>Hobbies</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <a onClick={handleDocumentsClick} className={`${Styles.nav_ul_li_a} ${currentPath === '/dokumente' ? Styles.active : ''}`}>🔒 Dokumente</a>
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
            <Link href="/" className={`${Styles.nav_ul_li_a} ${currentPath === '/' ? Styles.active : ''}`}>Home</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link href="/about" className={`${Styles.nav_ul_li_a} ${currentPath === '/about' ? Styles.active : ''}`}>About</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link href="/projekte" className={`${Styles.nav_ul_li_a} ${currentPath === '/projekte' ? Styles.active : ''}`}>Projekte</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link href="/hobbies" className={`${Styles.nav_ul_li_a} ${currentPath === '/hobbies' ? Styles.active : ''}`}>Hobbies</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <a onClick={handleDocumentsClick} className={`${Styles.nav_ul_li_a} ${currentPath === '/dokumente' ? Styles.active : ''}`}>🔒 Dokumente</a>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className={`${Styles.overlay} ${menuOpen ? Styles.visible : ''}`} onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
