import styles from "./PreFooterHero.module.css";
import heroImg from "../../assets/shared/desktop/bg-beta.jpg";
import Button from "../single/Button";

function PreFooterHero() {
  return (
    <div className={styles.container}>
      <img src={heroImg} alt="desert" />
      <div>
        <h1>
          We're in Beta. <br />
          Get your invite today!
        </h1>
        <Button type="transparent-onBlack-btn" arrow={true} arrowColor="#fff">
          get an invite
        </Button>
      </div>
    </div>
  );
}

export default PreFooterHero;
