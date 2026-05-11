// galleryData.js
import img1 from "/assets/Gallery/sportsday_1.webp";
import img2 from "/assets/Gallery/sportsday_2.webp";
import img3 from "/assets/Gallery/sportsday_3.webp";
import img4 from "/assets/Gallery/sportsday_4.webp";
import img5 from "/assets/Gallery/sportsday_5.webp";
import img6 from "/assets/Gallery/invsting_cermony_1.webp";
import img7 from "/assets/Gallery/invsting_cermony_2.webp";
import img8 from "/assets/Gallery/invsting_cermony_3.webp";
import img9 from "/assets/Gallery/invsting_cermony_4.webp";
import img10 from "/assets/Gallery/invsting_cermony_5.webp";

export const gallerySections = [
  {
    title: "Sports Day",
    description:
      "Celebrating the spirit of sportsmanship and teamwork. Sports Day was a grand success with races, relays, and smiles all around.",
    images: [img1, img2, img3, img4, img5],
  },
  {
    title: "Cultural Fest",
    description:
      "An explosion of color, talent, and tradition. Our Cultural Fest showcased the vibrant heritage and creativity of our students.",
    images: [img6, img7, img8, img9, img10],
    reverse: true,
  },
];
