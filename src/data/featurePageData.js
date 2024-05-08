import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import customDomain from "../assets/features/desktop/custom-domain.svg";
import dragNdrop from "../assets/features/desktop/drag-drop.svg";
import boostExposure from "../assets/features/desktop/boost-exposure.svg";
import heroDesktop from "../assets/features/desktop/hero.jpg";
import heroTablet from "../assets/features/tablet/hero.jpg";
import heroMobile from "../assets/features/mobile/hero.jpg";

const featureBannerData = {
  title: "Features",
  body: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
  imageDesktop: heroDesktop,
  imageTablet: heroTablet,
  imageMobile: heroMobile,
  button: ["transparent-onBlack-btn", "Get an invite"],
};
const featurePageData = [
  {
    title: "100% Responsive",
    body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: responsive,
  },
  {
    title: "No Photo Upload Limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: noLimit,
  },
  {
    title: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    image: embed,
  },
  {
    title: "Custom Domain",
    body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    image: customDomain,
  },
  {
    title: "  Boost Your Exposure",
    body: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    image: boostExposure,
  },
  {
    title: "Drag & Drop Image",
    body: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    image: dragNdrop,
  },
];

export { featureBannerData, featurePageData };
