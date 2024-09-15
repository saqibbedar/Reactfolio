// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
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
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "x", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: "Your twitter link", // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "Your linkedIn link", // Replace with your actual LinkedIn URL
  },
  {
    name: "facebook",
    component: FaFacebookSquare, // Facebook icon
    link: "Your facebook link",
  },
  {
    name: "instagram",
    component: FaInstagramSquare, // Instagram icon
    link: "Your instagram link",
  },
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "Your github link",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "John Doe"; // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "", // Your profile image link
  authorDescription:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ad architecto sint quaerat necessitatibus hic voluptas odio ex quidem eaque quo dicta, corrupti, incidunt quis reiciendis aperiam maiores molestias autem?", // Short bio or description about yourself
  getInTouchUrl: "Your contact url", // URL for your contact or form page
  authorName: "John Doe", // Replace with your name
  profileImgTagLine: "Software Engineer @ Google", // Your tagline or job title
  authorContactMail: "johndoe@gmail.com", // Your email address
  authorContactNumber: "843-695-0671", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2021, // Year of graduation
    degreeType: "High School", // Type of degree
    institution: "XYZ College", // Institution name
    institutionUrl: "", // Institution website link (optional)
  },
  {
    graduationYear: 2027, // Year of graduation
    degreeType: "Bachelor's degree", // Degree type
    institution: "XYZ University", // Institution name
    institutionUrl: "", // Institution website link (optional)
  },
  // Add more educational qualifications if needed
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
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

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "Git clone", // Project name
    projectDescription: "lorem ipsum...", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Flask, React.js, MongoDB, Rest API", // Tech stack used in the project
    date: "Sep 2022 - May 2023", // Project duration
  },
  {
    projectName: "Git clone", // Project name
    projectDescription: "lorem ipsum...", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Flask, React.js, MongoDB, Rest API", // Tech stack used in the project
    date: "Sep 2022 - May 2023", // Project duration
  },
  // Add more projects or remove the ones you don't need
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
