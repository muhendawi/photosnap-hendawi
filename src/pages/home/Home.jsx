import StoryCardSection from "../../components/multi/StoryCardSection";
import BannerSection from "../../components/multi/BannerSection";
import PageNav from "../../components/single/PageNav";
import FooterSection from "../../components/single/FooterSection";
import HomeFeatureCardSection from "../../components/multi/HomeFeatureCardSection";
import { useEffect } from "react";
// import styles from "./Home.module.css";

function Home() {
  /* Using to useEffect to open the page at the top by scrolling to 
  (0,0) coordination */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageNav />
      <BannerSection />
      <StoryCardSection />
      <HomeFeatureCardSection />
      <FooterSection />
    </div>
  );
}

export default Home;
