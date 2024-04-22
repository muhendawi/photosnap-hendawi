import HomeBanner from "../../components/single/HomeBanner";
import PageNav from "../../components/single/PageNav";
import styles from "./Pricing.module.css";
import { pricingBannerData } from "../../data/pricingPageData";
import FooterSection from "../../components/single/FooterSection";

function Pricing() {
  return (
    <div>
      <PageNav />
      <HomeBanner
        title={pricingBannerData.title}
        body={pricingBannerData.body}
        image={pricingBannerData.image}
        button={pricingBannerData.button}
      />
      <FooterSection />
    </div>
  );
}

export default Pricing;
