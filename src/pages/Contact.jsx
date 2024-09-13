import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="#Contact" className={`${containerStyle}`}>
      <PageTitle title={"Contact"} />
      <div className="flex flex-col bedar-sc2:flex-row bg-black rounded-xl overflow-hidden">
        <div className="hidden bedar-sc2:flex justify-center items-center w-1/2">
          <img
            src="https://saqibbedar.github.io/Portfolio/contact_image.webp"
            alt=""
          />
        </div>
        <div className="w-full bedar-sc2:w-1/2 flex flex-col items-center gap-1 py-12 px-5 text-[#6e6e73] font-medium leading-[26px] text-[18px]">
          <img
            src={AboutPage.authorProfile}
            className="w-36 h-36 rounded-full border-2 border-white"
            alt="author-profile"
          />
          <h1 className="text-5xl font-extrabold text-white my-4">
            Contact Me
          </h1>
          <div className="text-center mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos autem
            deserunt maiores quas facere quae qui perferendis iure, dolorem
            temporibus ipsum fugit ullam eaque soluta cupiditate, eius et
            officiis veniam.
          </div>
          <Link
            to={`mailto:${AboutPage.authorContactMail}`}
            className="flex items-center gap-2"
          >
            <MdEmail className="w-6 h-6" />{" "}
            <span>{AboutPage.authorContactMail}</span>
          </Link>
          <Link
            to={`tel:${AboutPage.authorContactMail}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt className="w-[18px] h-[18px]" />{" "}
            <span>{AboutPage.authorContactNumber}</span>
          </Link>
          <div className="flex justify-center gap-2 flex-wrap mt-4">
            {footerIcons.map(
              ({ name, component: IconComponent, link }, index) => (
                <Link to={link} key={index} title={name}>
                  <IconComponent className="h-9 w-9"/>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
