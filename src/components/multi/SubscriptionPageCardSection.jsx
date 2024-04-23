import styles from "./SubscriptionPageCardSection.module.css";
import { subCardData } from "../../data/pricingPageData";
import SubscriptionCard from "../single/SubscriptionCard";

function SubscriptionPageCardSection() {
  return (
    <section className={styles.container}>
      <div className={styles.toggleBtn}></div>
      <div className={styles.cardsContainer}>
        {subCardData.map((cardData) => (
          <SubscriptionCard
            key={cardData.title}
            title={cardData.title}
            body={cardData.body}
            price={cardData.price}
            period={cardData.period}
            buttonType={cardData.button}
          />
        ))}
      </div>
    </section>
  );
}

export default SubscriptionPageCardSection;
