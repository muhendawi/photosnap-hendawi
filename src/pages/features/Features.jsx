import PageNav from "../../components/single/PageNav";
import { featureBannerData } from "../../data/featurePageData";
import styles from "./Features.module.css";
import HomeBanner from "../../components/single/HomeBanner";
import FooterSection from "../../components/single/FooterSection";
import PreFooterHero from "../../components/multi/PreFooterHero";
import FeaturePageCardSection from "../../components/multi/FeaturePageCardSection";
import { useEffect } from "react";

function Features() {
  /* Using to useEffect to open the page at the top by scrolling to 
  (0,0) coordination */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.wrapper}>
      <PageNav />
      <HomeBanner
        title={featureBannerData.title}
        body={featureBannerData.body}
        image={featureBannerData.image}
        button={featureBannerData.button}
      />
      <FeaturePageCardSection />
      <PreFooterHero />
      <FooterSection />
    </div>
  );
}

export default Features;
