import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function PageNav() {
  const [isMenuOn, setMenu] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/stories">Stories</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
        </ul>
        <Button type="black-btn">Get an invite</Button>
        {isMenuOn ? (
          <IoCloseOutline
            onClick={() => {
              setMenu(!isMenuOn);
              document.body.style.overflow = "auto";
            }}
            className={styles.hamburgerBtn}
            size={40}
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => {
              setMenu(!isMenuOn);
              document.body.style.overflow = "hidden";
            }}
            className={styles.hamburgerBtn}
            size={35}
          />
        )}
      </nav>
      <div
        className={`${styles.backdrop} ${
          isMenuOn ? styles.backdropOn : styles.backdropOff
        }`}
        onClick={() => {
          setMenu(!isMenuOn);
          document.body.style.overflow = "auto";
        }}
      ></div>
      <div
        className={`${styles.menuContainer} ${
          isMenuOn ? styles.menuContainerOn : styles.menuContainerOff
        }`}
      >
        {" "}
        <div className={styles.innerMenu}>
          <ul>
            <li>
              <NavLink to="/stories">Stories</NavLink>
            </li>
            <li>
              <NavLink to="/features">Features</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
          </ul>

          <Button type="black-btn">Get an invite</Button>
        </div>
      </div>
    </>
  );
}

export default PageNav;
