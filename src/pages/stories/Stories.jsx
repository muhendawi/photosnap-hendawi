import StoriesPageCardSection from "../../components/multi/StoriesPageCardSection";
import PageNav from "../../components/single/PageNav";
import FooterSection from "../../components/single/FooterSection";
import styles from "./Stories.module.css";
import StoriesHeroSection from "../../components/single/StoriesHeroSection";
import { useEffect } from "react";

function Stories() {
  /* Using to useEffect to open the page at the top by scrolling to 
  (0,0) coordination */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
