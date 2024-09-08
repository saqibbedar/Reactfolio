import {
  FaDiscord,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const icons = {
  LuGraduationCap,
}

const footerIcons = [
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

const AboutPage = {
  authorProfile:
    "https://avatars.githubusercontent.com/u/124094939?v=4https://avatars.githubusercontent.com/u/124094939?v=4",
  authorDescription:
    "I'm Ahmed, an Android Developer with over three years of specialized experience in Kotlin programming. I offer high-quality and efficient app development solutions tailored to your unique needs. Let's create user-friendly apps with clean code for your business success.",
  getInTouchUrl: "https://contra.com/ahmed_fayaz_n6f1ycoi",
};

const EducationPage = [
  {
    icon: icons.LuGraduationCap,
    graduationYear: 2021,
    degreeType: "High School",
    institution: "Cadet College Larkana",
    institutionUrl: "",
  },
  {
    icon: icons.LuGraduationCap,
    graduationYear: 2027,
    degreeType: "Bachelor's degree",
    institution: "QAU, Islamabad",
    institutionUrl: "",
  },
];


export { icons, textLogo, imgLogo, AboutPage, footerIcons, EducationPage };
