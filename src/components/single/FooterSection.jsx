import styles from "./FooterSection.module.css";
import LogoSVG from "../../assets/LogoSVG";
import { Link, NavLink } from "react-router-dom";

import facebook from "../../assets/shared/desktop/facebook.svg";
import instagram from "../../assets/shared/desktop/instagram.svg";
import pinterest from "../../assets/shared/desktop/pinterest.svg";
import twitter from "../../assets/shared/desktop/twitter.svg";
import youtube from "../../assets/shared/desktop/youtube.svg";
import Button from "./Button";

function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navAndSocials}>
        <div className={styles.logos}>
          <LogoSVG color="#fff" />
          <ul>
            <Link to="https://www.facebook.com" target="_blank">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="https://www.instagram.com" target="_blank">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="https://www.pinterest.com" target="_blank">
              <img src={pinterest} alt="pinterest" />
            </Link>
            <Link to="https://www.twitter.com" target="_blank">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to="https://www.youtube.com" target="_blank">
              <img src={youtube} alt="youtube" />
            </Link>
          </ul>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
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
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.btnAndArrow}>
          <Button type="transparent-onWhite-btn" arrow={true} arrowColor="#fff">
            get an invite
          </Button>
        </div>
        <p>
          Copyright &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
