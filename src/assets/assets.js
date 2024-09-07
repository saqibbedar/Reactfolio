import {
  FaDiscord,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const icons = [
  {
    name: "linkedIn",
    component: FaLinkedin,
    link: "https://www.linkedin.com/in/yourprofile",
  },
  {
    name: "facebook",
    component: FaFacebookSquare,
    link: "https://www.facebook.com/yourprofile",
  },
  {
    name: "instagram",
    component: FaInstagramSquare,
    link: "https://www.instagram.com/yourprofile",
  },
  {
    name: "discord",
    component: FaDiscord,
    link: "https://discord.com/yourprofile",
  },
];

const textLogo = "Brand Name";
const imgLogo = null;

export { icons, textLogo, imgLogo };
