import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
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
        <RxHamburgerMenu
          onClick={() => setMenu(!isMenuOn)}
          className={styles.hamburgerBtn}
          size={35}
        />
      </nav>
      <div
        className={`${styles.menuContainer} ${
          isMenuOn ? styles.menuContainerOn : styles.menuContainerOff
        }`}
      >
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