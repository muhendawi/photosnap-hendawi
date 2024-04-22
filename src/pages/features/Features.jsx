import PageNav from "../../components/single/PageNav";
import { featureBannerData } from "../../data/featurePageData";
import styles from "./Features.module.css";
import HomeBanner from "../../components/single/HomeBanner";
import FooterSection from "../../components/single/FooterSection";
import PreFooterHero from "../../components/multi/PreFooterHero";
import FeaturePageCardSection from "../../components/multi/FeaturePageCardSection";

function Features() {
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
