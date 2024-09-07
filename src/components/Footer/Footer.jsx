import { Link } from "react-router-dom";
import { imgLogo, textLogo, icons } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-zinc-900 flex items-center justify-between px-20 py-5">
      <div>{imgLogo ? <img src={imgLogo} /> : <div className="text-white text-2xl font-semibold">{textLogo}</div>}</div>
      <div className="flex gap-6">
        {icons.map(({name, component: IconComponent, link}) => (
          <Link to={link} key={name}>
            <IconComponent className="w-8 h-8 fill-zinc-300"/>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Footer;
