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
        imageDesktop={featureBannerData.imageDesktop}
        imageTablet={featureBannerData.imageTablet}
        imageMobile={featureBannerData.imageMobile}
        button={featureBannerData.button}
      />
      <FeaturePageCardSection />
      <PreFooterHero />
      <FooterSection />
    </div>
  );
}

export default Features;
