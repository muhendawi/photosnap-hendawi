import hero from "../assets/pricing/desktop/hero.jpg";

const pricingBannerData = {
  title: "Pricing",
  body: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  image: hero,
  button: ["transparent-onBlack-btn", "Get an invite"],
};

const subCardData = [
  {
    title: "Basic",
    body: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "19.00",
    period: "month",
    button: "black-btn",
  },
  {
    title: "Pro",
    body: "More advanced features available. Recommended for photography veterans and professionals.",
    price: "39.00",
    period: "month",
    button: "white-btn",
  },
  {
    title: "Business",
    body: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "99.00",
    period: "month",
    button: "black-btn",
  },
];

export { pricingBannerData, subCardData };
