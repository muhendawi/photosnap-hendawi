import { subCardData } from "./data/pricingPageData";

console.log(subCardData.map((cardData) => Number(cardData.price) * 10));
