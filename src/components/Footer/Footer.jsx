import { Link } from "react-router-dom";
import { imgLogo, textLogo, footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="bg-mainColor flex items-center justify-between px-5 bedar-sc1:px-20 py-5 mt-12">
      <div>
        {imgLogo ? (
          <img src={imgLogo} />
        ) : (
          <a
              href={`#${navElements[0]}`}
              onClick={() => setActiveElem(navElements[0])}
            className="text-white select-none text-2xl font-semibold"
          >
            {textLogo}
          </a>
        )}
      </div>
      <div className="flex gap-[10px]">
        {footerIcons.map(({ name, component: IconComponent, link }) => (
          <Link to={link} key={name} className="flex" title={name}>
            <IconComponent className="w-9 h-9 fill-zinc-400 hover:fill-white transition-colors ease-linear" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
