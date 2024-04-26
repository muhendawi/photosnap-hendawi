import styles from "./SubscriptionPageCardSection.module.css";
import { subCardData } from "../../data/pricingPageData";
import SubscriptionCard from "../single/SubscriptionCard";
import { useState } from "react";

function SubscriptionPageCardSection() {
  const [data, setData] = useState(subCardData);
  const [isToggled, setIsToggled] = useState(true);

  function handleToggling() {
    setIsToggled(!isToggled);
    const subscriptions = data.map((cardData) => {
      if (isToggled) {
        return {
          ...cardData,
          price: Number(cardData.price * 10).toFixed(2),
          period: "Year",
        };
      } else {
        return {
          ...cardData,
          price: (Number(cardData.price) / 10).toFixed(2),
          period: "Month",
        };
      }
    });
    setData(subscriptions);
  }
  return (
    <section className={styles.container}>
      <div
        className={`${styles.toggleContainer} ${
          isToggled ? styles.selectMonthly : styles.selectYearly
        }`}
      >
        <h3 className={isToggled ? styles.selectedBlack : ""}>Monthly</h3>
        <div className={styles.toggleBtn}>
          <input type="checkbox" id="toggle-btn" onChange={handleToggling} />
          <label htmlFor="toggle-btn"></label>
        </div>
        <h3 className={!isToggled ? styles.selectedBlack : ""}>Yearly</h3>
      </div>
      <div className={styles.cardsContainer}>
        {data.map((cardData) => (
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
