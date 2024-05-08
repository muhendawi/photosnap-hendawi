import { homeBannerData } from "../../data/homeBannerData";
import HomeBanner from "../single/HomeBanner";

function BannerSection() {
  return (
    <>
      {homeBannerData.map((sectionData, index) => (
        <HomeBanner
          key={sectionData.title}
          title={sectionData.title}
          button={sectionData.button}
          addButton={true}
          body={sectionData.body}
          imageDesktop={sectionData.imageDesktop}
          imageTablet={sectionData.imageTablet}
          imageMobile={sectionData.imageMobile}
          index={index}
        />
      ))}
    </>
  );
}

export default BannerSection;
