import HomeBanner from "../../components/single/HomeBanner";
import PageNav from "../../components/single/PageNav";
import { pricingBannerData } from "../../data/pricingPageData";
import FooterSection from "../../components/single/FooterSection";
import SubscriptionPageCardSection from "../../components/multi/SubscriptionPageCardSection";

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
      <SubscriptionPageCardSection />
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
