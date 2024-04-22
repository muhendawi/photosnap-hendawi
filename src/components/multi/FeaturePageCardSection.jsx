import styles from "./FeaturePageCardSection.module.css";
import { featurePageData } from "../../data/featurePageData";
import FeatureCard from "../single/FeatureCard";

function FeaturePageCardSection() {
  return (
    <div className={styles.container}>
      {featurePageData.map((cardData) => (
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

export default FeaturePageCardSection;
