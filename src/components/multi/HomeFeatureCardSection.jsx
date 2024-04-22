import styles from "./HomeFeatureCardSection.module.css";
import { featureCardData } from "../../data/featureCardData";
import FeatureCard from "../single/FeatureCard";

function HomeFeatureCardSection() {
  return (
    <section className={styles.container}>
      {featureCardData.map((cardData) => (
        <FeatureCard
          key={cardData.title}
          title={cardData.title}
          body={cardData.body}
          image={cardData.image}
        />
      ))}
    </section>
  );
}

export default HomeFeatureCardSection;
