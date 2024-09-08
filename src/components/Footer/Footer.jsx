import { Link } from "react-router-dom";
import { imgLogo, textLogo, footerIcons } from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="bg-zinc-900 flex items-center justify-between px-20 py-5">
      <div>{imgLogo ? <img src={imgLogo} /> : <Link to={"/"} className="text-white select-none text-2xl font-semibold">{textLogo}</Link>}</div>
      <div className="flex gap-6">
        {footerIcons.map(({name, component: IconComponent, link}) => (
          <Link to={link} key={name}>
            <IconComponent className="w-8 h-8 fill-zinc-300"/>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Footer;
