import styles from "./StoryCardSection.module.css";
import { homeStoryCardData } from "../../data/homeStoryCardData";
import StoryCard from "../single/StoryCard";
function StoryCardSection() {
  return (
    <div className={styles.container}>
      {homeStoryCardData.map((cardData) => (
        <StoryCard
          key={cardData.title}
          title={cardData.title}
          author={cardData.author}
          image={cardData.image}
          // date="April 11th 2020"
        />
      ))}
    </div>
  );
}

export default StoryCardSection;
