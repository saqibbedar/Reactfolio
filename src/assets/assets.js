import {
  FaDiscord,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";


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

const textLogo = "John Doe";
const imgLogo = null;

const AboutPage = {
  authorProfile:
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
  authorDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta tempore quos rem ducimus consequuntur ab sit perspiciatis tenetur recusandae possimus a omnis, qui facere. Dolor perferendis eligendi pariatur aliquid?",
  getInTouchUrl: "",
  authorName: "John Doe",
  profileImgTagLine: "Software Engineer @ Google",
  authorContactMail: "johndoe@gmail.com",
  authorContactNumber: "843-695-0671",
};

const EducationPage = [
  {
    graduationYear: 2021,
    degreeType: "High School",
    institution: "XYZ College",
    institutionUrl: "",
  },
  {
    graduationYear: 2027,
    degreeType: "Bachelor's degree",
    institution: "XYZ University",
    institutionUrl: "",
  },
];

const CertificatesPage = [
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
  {
    img: "https://i.pinimg.com/736x/c3/80/29/c38029a42d38c9168b28442688241ea5.jpg",
    title: "Blue Mountain Certificate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias odit sed suscipit magnam cupiditate distinctio sequi laboriosam nemo beatae itaque ullam quae ipsum aut maiores nobis, ea dignissimos dolorum?",
    issuedBy: "Blue Mountain",
    credentialURL: "/",
  },
];

const skillsPage = [
  FaGitAlt,
  FaGithub,
  TbBrandCpp,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  FaHtml5,
  BsFiletypeXml,  
  FaCss3Alt,
  RiTailwindCssFill,
  FaYoutube,
];

const projectsPage = [
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum dollar amit...",
    projectURL: "/",
    githubRepositoryURL: "/",
    tags: "Flask, React.js, MongoDB, Rest API",
    date: "Sep 2022, - May 2023",
  },
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum dollar amit...",
    projectURL: "/",
    githubRepositoryURL: "/",
    tags: "Flask, React.js, MongoDB, Rest API",
    date: "Sep 2022, - May 2023",
  },
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum dollar amit...",
    projectURL: "/",
    githubRepositoryURL: "/",
    tags: "Flask, React.js, MongoDB, Rest API",
    date: "Sep 2022, - May 2023",
  },
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum dollar amit...",
    projectURL: "",
    githubRepositoryURL: "/",
    tags: "Flask, React.js, MongoDB, Rest API",
    date: "Sep 2022, - May 2023",
  },
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum dollar amit...",
    projectURL: "/",
    githubRepositoryURL: "/",
    tags: "Flask, React.js, MongoDB, Rest API",
    date: "Sep 2022, - May 2023",
  },
];

export { textLogo, imgLogo, AboutPage, footerIcons, EducationPage, skillsPage, projectsPage, CertificatesPage };
