import StoryCardSection from "../../components/StoryCardSection";
import BannerSection from "../../components/BannerSection";
import PageNav from "../../components/reusable/PageNav";
import FeatureCardSection from "../../components/FeatureCardSection";
import FooterSection from "../../components/reusable/FooterSection";
// import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <PageNav />
      <BannerSection />
      <StoryCardSection />
      <FeatureCardSection />
      <FooterSection />
    </div>
  );
}

export default Home;
