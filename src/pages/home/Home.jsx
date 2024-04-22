import StoryCardSection from "../../components/multi/StoryCardSection";
import BannerSection from "../../components/multi/BannerSection";
import PageNav from "../../components/single/PageNav";
import FooterSection from "../../components/single/FooterSection";
import HomeFeatureCardSection from "../../components/multi/HomeFeatureCardSection";
// import styles from "./Home.module.css";

function Home() {
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
