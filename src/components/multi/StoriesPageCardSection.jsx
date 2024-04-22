import styles from "./StoriesPageCardSection.module.css";
import { storiesPageData } from "../../data/storiesPageData";
import StoryCard from "../single/StoryCard";

function StoriesPageCardSection() {
  return (
    <div className={styles.container}>
      {storiesPageData.map((cardData) => (
        <StoryCard
          key={cardData.title}
          title={cardData.title}
          author={cardData.author}
          date={cardData.date}
          image={cardData.image}
        />
      ))}
    </div>
  );
}

export default StoriesPageCardSection;
