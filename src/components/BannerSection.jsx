import { homeBannerData } from "../data/homeBannerData";
import HomeBanner from "./reusable/HomeBanner";

function BannerSection() {
  return (
    <>
      {homeBannerData.map((sectionData, index) => (
        <HomeBanner
          key={sectionData.title}
          title={sectionData.title}
          button={sectionData.button}
          body={sectionData.body}
          image={sectionData.image}
          index={index}
        />
      ))}
    </>
  );
}

export default BannerSection;
