import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";
import links from "../../data";
import Links from "./Links";
import SidebarMenu from "../../components/Navbar/SidebarMenu";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ updateSidebarVisibility,toggleLinks, screenBreakpoint, dropdownToggle, sidebarVisible, resetSidebarVisibility }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(false);

  const handleClick = () =>{
    setMenuOpen(!menuOpen);
    updateSidebarVisibility();
  }

  useEffect(() => {
    if (menuOpen && screenBreakpoint) {
      setMenuOpen(false);
      updateSidebarVisibility();
    }
  }, [screenBreakpoint, menuOpen, updateSidebarVisibility]);
  

  useEffect(()=>{
    menuOpen
      ? (document.body.style.overflowY = "hidden")
      : document.body.style.overflowY = 'visible';
  })

  window.addEventListener('scroll', ()=>{
    window.pageYOffset < 600 ? setPageYOffset(false) : setPageYOffset(true);
  })

  const resetOpenSidemenu = ()=>{
    setMenuOpen(false);
  }

  return (
    <div
      className={styles.navbar}
      style={{
        boxShadow: pageYOffset ? "0 0 15px -4px #000" : "0 0 15px -4px #333",
      }}
    >
      <div className={styles.navbar__content}>
        <div className={styles.logo}>
          <div className={styles.logo__content}>
            <img src={logo} alt="logo" />
            <h6> COVID19 WORLDWIDE TRACKER (SARS-COV-2)</h6>
          </div>
        </div>
        <div className={styles.links}>
          <div style={{ display: toggleLinks ? "none" : "flex" }}>
            <Links dflex="row" links={links} />
          </div>
          <div
            style={{ display: toggleLinks ? "flex" : "none" }}
            className={styles.hamburger__menu}
          >
            <div onClick={handleClick} className={styles.hamburger__container}>
              {menuOpen ? (
                <CloseIcon className={styles.menu__icon} />
              ) : (
                <MenuIcon className={styles.menu__icon} />
              )}
            </div>
          </div>
        </div>
        {!screenBreakpoint && (
          <SidebarMenu
            sidebarVisible={sidebarVisible}
            dropdownTopVisible={dropdownToggle}
            updateSidebarVisibility={resetSidebarVisibility}
            resetOpenSidemenu={resetOpenSidemenu}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
