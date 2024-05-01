import HomeBanner from "../../components/single/HomeBanner";
import PageNav from "../../components/single/PageNav";
import { pricingBannerData } from "../../data/pricingPageData";
import FooterSection from "../../components/single/FooterSection";
import SubscriptionPageCardSection from "../../components/multi/SubscriptionPageCardSection";
import PreFooterHero from "../../components/multi/PreFooterHero";
import SubscriptionTableFeature from "../../components/multi/SubscriptionTableFeature";
import { useEffect } from "react";

function Pricing() {
  /* Using to useEffect to open the page at the top by scrolling to 
  (0,0) coordination */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageNav />
      <HomeBanner
        title={pricingBannerData.title}
        body={pricingBannerData.body}
        image={pricingBannerData.image}
        button={pricingBannerData.button}
      />
      <SubscriptionPageCardSection />
      <SubscriptionTableFeature />
      <PreFooterHero />
      <FooterSection />
      {/* <SubscriptionCard
        title={subCardData[0].title}
        body={subCardData[0].body}
        price={subCardData[0].price}
        period={subCardData[0].period}
        buttonType={subCardData[0].button}
      /> */}
    </div>
  );
}

export default Pricing;
