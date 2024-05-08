import styles from "./StoriesHeroSection.module.css";
import { heroData } from "../../data/storiesPageData";
import Button from "./Button";

function StoriesHeroSection() {
  return (
    <main className={styles.container}>
      <div className={styles.text}>
        <h4>{heroData.info}</h4>
        <h1>{heroData.title}</h1>
        <p>
          {heroData.date} <span>by {heroData.author}</span>
        </p>
        <p>{heroData.body}</p>
        <Button type="transparent-onBlack-btn" arrow={true} arrowColor="#fff">
          read the story
        </Button>
      </div>
      <picture>
        <source srcSet={heroData.imageMoile} media="(max-width: 723px)" />
        <source srcSet={heroData.imageTablet} media="(max-width: 1070px)" />
        <img src={heroData.imageDesktop} alt="Image" />
      </picture>
      {/* <img src={heroData.image} alt={heroData.title} /> */}
    </main>
  );
}

export default StoriesHeroSection;
