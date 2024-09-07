import { Link } from "react-router-dom";
import { imgLogo, textLogo } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [activeElem, setActiveElem] = useState("About");
  const [scrollY, setScrollY] = useState(0);

  useState(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full left-0 top-0 px-10 py-4 transition-all ease-linear duration-300 ${
        scrollY >= 120 ? "fixed bg-[#ffffffdc] backdrop-blur" : ""
      } z-10`}
    >
      <div
        className={`w-full left-0 top-0 flex items-center justify-between px-10 border rounded-full border-zinc-200 bg-white `}
      >
        {imgLogo ? (
          <img src={imgLogo} />
        ) : (
          <Link to={"/"} className="text-3xl font-bold py-5 select-none whitespace-nowrap">
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
    </div>
  );
};

export default Navbar;
