import createAndShareDesktop from "../assets/home/desktop/create-and-share.jpg";
import createAndShareTablet from "../assets/home/tablet/create-and-share.jpg";
import createAndShareMobile from "../assets/home/mobile/create-and-share.jpg";

import beautifulStoriesDesktop from "../assets/home/desktop/beautiful-stories.jpg";
import beautifulStoriesTablet from "../assets/home/tablet/beautiful-stories.jpg";
import beautifulStoriesMobile from "../assets/home/mobile/beautiful-stories.jpg";

import designedForEveryoneDesktop from "../assets/home/desktop/designed-for-everyone.jpg";
import designedForEveryoneTablet from "../assets/home/tablet/designed-for-everyone.jpg";
import designedForEveryoneMobile from "../assets/home/mobile/designed-for-everyone.jpg";

const homeBannerData = [
  {
    title: "Create and share your photo Stories",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    button: ["transparent-onBlack-btn", "get an invite"],
    imageDesktop: createAndShareDesktop,
    imageTablet: createAndShareTablet,
    imageMobile: createAndShareMobile,
  },
  {
    title: "Beautiful stories every time",
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    button: ["transparent-onWhite-btn", "View the stories"],
    imageDesktop: beautifulStoriesDesktop,
    imageTablet: beautifulStoriesTablet,
    imageMobile: beautifulStoriesMobile,
  },
  {
    title: "Designed for everyone",
    body: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    button: ["transparent-onWhite-btn", "View the stories"],
    imageDesktop: designedForEveryoneDesktop,
    imageTablet: designedForEveryoneTablet,
    imageMobile: designedForEveryoneMobile,
  },
];

export { homeBannerData };
