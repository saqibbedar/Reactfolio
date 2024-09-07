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

const authorDetails = {
  authorProfile:
    "https://media.contra.com/image/upload/c_fill,f_avif,h_176,q_auto:good,w_176/jvgmbua0vfvwokvjgnge",
  authorDescription:
    "I'm Ahmed, an Android Developer with over three years of specialized experience in Kotlin programming. I offer high-quality and efficient app development solutions tailored to your unique needs. Let's create user-friendly apps with clean code for your business success.",
  getInTouchUrl: "https://contra.com/ahmed_fayaz_n6f1ycoi",
};

export { icons, textLogo, imgLogo, authorDetails };
