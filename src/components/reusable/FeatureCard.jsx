import styles from "./FeatureCard.module.css";

function FeatureCard({ title, body, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
