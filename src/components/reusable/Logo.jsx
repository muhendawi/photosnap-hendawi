import { Link } from "react-router-dom";
import logoImg from "../../assets/shared/desktop/logo.svg";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="photosnap logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
