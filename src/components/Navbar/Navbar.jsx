import { Link } from "react-router-dom";
import { imgLogo, textLogo } from "../../assets/assets";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeElem, setActiveElem] = useState("About");
  // const [scrollY, setScrollY] = useState(0);
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  // useState(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={`fixed w-full left-0 top-0 px-5 bedar-sc1:px-10 py-4 
       bg-[#ffffffdc] backdrop-blur z-10`}
    >
      <div
        className={`flex items-center justify-between px-5 bedar-sc2:px-10 bedar-sc1:px-10 border rounded-full border-zinc-200 bg-white `}
      >
        {imgLogo ? (
          <img src={imgLogo} />
        ) : (
          <Link
            to={"/"}
            className="text-lg bedar-sc2:text-3xl font-bold py-3 bedar-sc2:py-4 bedar-sc1:py-5 select-none whitespace-nowrap"
          >
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
            <div key={1}>
              <Link
                to={`#${elem}`}
                onClick={() => setActiveElem(elem)}
                className={`hidden bedar-sc2:flex text-[1rem] font-[500] ${
                  activeElem === elem && "bg-[#373f51] text-white"
                } py-2 px-4 rounded-full transition-all ease-in`}
              >
                {elem}
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsMenuHidden(!isMenuHidden)}
          className={`text-[#373f51] flex bedar-sc2:hidden`}
        >
          {isMenuHidden ? (
            <RxHamburgerMenu className="h-6 w-6" />
          ) : (
            <IoClose className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`flex fixed backdrop-blur bedar-sc2:hidden flex-col bg-[#ffffff] border-zinc-200 py-4 px-5 rounded-md gap-2 right-[1.22rem] top-[5rem] z-10 shadow-md border transition-all ease-in duration-300  ${
          isMenuHidden ? "top-[10rem] invisible opacity-0" : "top-[5rem] visible opacity-100"
        }`}
      >
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
            key={1}
            onClick={() => setActiveElem(elem)}
            className={`bg-white border border-zinc-200 px-12 py-2 text-center rounded-md cursor-pointer ${
              activeElem === elem && "bg-[#373f51f7] text-white"
            }`}
          >
            {elem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
