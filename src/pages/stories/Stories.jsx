import StoriesPageCardSection from "../../components/multi/StoriesPageCardSection";
import PageNav from "../../components/single/PageNav";
import FooterSection from "../../components/single/FooterSection";
import styles from "./Stories.module.css";
import StoriesHeroSection from "../../components/single/StoriesHeroSection";

function Stories() {
  return (
    <div className={styles}>
      <PageNav />
      <StoriesHeroSection />
      <StoriesPageCardSection />
      <FooterSection />
    </div>
  );
}

export default Stories;
