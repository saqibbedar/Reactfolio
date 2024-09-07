import { Link } from "react-router-dom";
import { imgLogo, textLogo } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [activeElem, setActiveElem] = useState("About");

  return (
    <div className="flex items-center justify-between px-10 border mx-10 my-5 rounded-full border-zinc-200">
      {imgLogo ? (
        <img src={imgLogo} />
      ) : (
        <Link to={"/"} className="text-3xl font-bold py-5 select-none">
          {textLogo}
        </Link>
      )}
      <div className="flex gap-2">
        {[
          "About",
          "Education",
          "Skills",
          "Projects",
          "Services",
          "Contact",
        ].map((elem) => (
          <Link
            to={`#${elem}`}
            onClick={() => setActiveElem(elem)}
            className={`text-[1rem] font-[500] ${
              activeElem === elem && "bg-[#373f51] text-white"
            } py-2 px-4 rounded-full transition-all ease-in`}
            key={1}
          >
            {elem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
