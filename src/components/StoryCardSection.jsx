import styles from "./StoryCardSection.module.css";
import { storyCardData } from "../data/storyCardData";
import StoryCard from "./reusable/StoryCard";
function StoryCardSection() {
  return (
    <div className={styles.container}>
      {storyCardData.map((cardData) => (
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
