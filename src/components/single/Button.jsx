import Arrow from "../../assets/Arrow";
import styles from "./Button.module.css";

function Button({ children, onClick, type, arrow = false, arrowColor }) {
  return (
    <div className={`${styles.btn} ${arrow && styles.hover}`} onClick={onClick}>
      <button
        className={`
      ${styles[type]} ${styles.button}`}
      >
        {children}
      </button>
      {arrow && <Arrow color={arrowColor} />}
    </div>
  );
}

export default Button;
