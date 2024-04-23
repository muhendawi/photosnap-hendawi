import styles from "./SubscriptionCard.module.css";

function SubscriptionCard({ title, body, price, period, buttonType }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.subContainer} ${
          buttonType === "white-btn" && styles.blackBgAndHeight
        }`}
      >
        <h2 className={styles.size1070px}>{title}</h2>
        <p className={styles.size1070px}>{body}</p>
        <div className={styles.priceAndPeriod}>
          <h1>${price}</h1>
          <p className={styles.period}>per {period}</p>
        </div>
        <button className={`${styles[buttonType]} ${styles.size1070px}`}>
          pick plan
        </button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
