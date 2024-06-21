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
        router.push('/login');
      } else {
        router.push('/dokumente');
      }
      setMenuOpen(false);
    },
    [isAuthenticated, router]
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
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
          <a href='/'><img className={Styles.logo}src='./logo.png' alt="Logo"/></a>
        </div>

        <nav className={Styles.rightSide}>
          <ul className={Styles.nav_ul}>
            <li className={Styles.nav_ul_li}>
                <Link href="/" className={`${Styles.nav_ul_li_a} ${currentPath === '/' ? Styles.active : ''}`}>
                  Home
                </Link>
            </li> 
            <li className={Styles.nav_ul_li}>
              <Link href="/ausbildung" className={`${Styles.nav_ul_li_a} ${currentPath === '/ausbildung' ? Styles.active : ''}`}>Ausbildung</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link href="/projekte" className={`${Styles.nav_ul_li_a} ${currentPath === '/projekte' ? Styles.active : ''}`}>Projekte</Link>
            </li>
           
            <li className={Styles.nav_ul_li}>
              <Link href="/kompetenzen" className={`${Styles.nav_ul_li_a} ${currentPath === '/kompetenzen' ? Styles.active : ''}`}>Kompetenzen</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <a onClick={handleDocumentsClick} className={`${Styles.nav_ul_li_a} ${currentPath === '/dokumente' ? Styles.active : ''}`}>🔒 Dokumente</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${Styles.mainContent} ${menuOpen ? Styles.blurred : ''}`}> 
      </div>

      <nav className={`${menuOpen ? Styles.nav_open : Styles.nav_closed}`}>
        <ul className={Styles.nav_ul_mobile}>
          <li className={Styles.nav_ul_li}>
              <Link href="/" className={`${Styles.nav_ul_li_a} ${currentPath === '/' ? Styles.active : ''}`} onClick={handleLinkClick}>
                Home
              </Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link href="/ausbildung" className={`${Styles.nav_ul_li_a} ${currentPath === '/ausbildung' ? Styles.active : ''}`} onClick={handleLinkClick}>Ausbildung</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link href="/projekte" className={`${Styles.nav_ul_li_a} ${currentPath === '/projekte' ? Styles.active : ''}`} onClick={handleLinkClick}>Projekte</Link>
          </li>
          <li className={Styles.nav_ul_li}>
              <Link href="/kompetenzen" className={`${Styles.nav_ul_li_a} ${currentPath === '/kompetenzen' ? Styles.active : ''}`} onClick={handleLinkClick}>Kompetenzen</Link>
          </li> 
          <li className={Styles.nav_ul_li}>
            <a onClick={handleDocumentsClick} className={`${Styles.nav_ul_li_a} ${currentPath === '/dokumente' ? Styles.active : ''}`}>🔒 Dokumente</a>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className={Styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
