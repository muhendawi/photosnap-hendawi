import styles from "./FeatureCardSection.module.css";
import { featureCardData } from "../data/featureCardData";
import FeatureCard from "./reusable/FeatureCard";

function FeatureCardSection() {
  return (
    <div className={styles.container}>
      {featureCardData.map((cardData) => (
        <FeatureCard
          key={cardData.title}
          title={cardData.title}
          body={cardData.body}
          image={cardData.image}
        />
      ))}
    </div>
  );
}

export default FeatureCardSection;
