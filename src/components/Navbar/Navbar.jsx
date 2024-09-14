import { imgLogo, textLogo, navElements } from "../../assets/assets";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = ({ activeElem, setActiveElem }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    if (!isMenuHidden) {
      const handleBodyClick = (e) => {
        setIsMenuHidden(true);
      };

      document.body.addEventListener("click", handleBodyClick);

      return () => {
        document.body.removeEventListener("click", handleBodyClick);
      };
    }
  }, [isMenuHidden]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent body click when clicking the button
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div
      className={`fixed w-full left-0 top-0 px-5 bedar-sc1:px-10 py-4 
       z-10`}
    >
      <div
        className={`flex items-center justify-between px-5 bedar-sc2:px-10 bedar-sc1:px-10 border rounded-full border-zinc-200 bg-[#ffffff85] backdrop-blur-[20px] backdrop-saturate-[180%]`}
      >
        {imgLogo ? (
          <img src={imgLogo} />
        ) : (
          <a
            href={`#${navElements[0]}`}
            onClick={() => setActiveElem(navElements[0])}
            className="text-lg bedar-sc2:text-3xl font-bold py-3 bedar-sc2:py-4 bedar-sc1:py-5 select-none whitespace-nowrap"
          >
            {textLogo}
          </a>
        )}
        <div className="flex gap-2">
          {navElements.map((elem) => (
            <div key={1}>
              <a
                href={`#${elem}`}
                onClick={() => setActiveElem(elem)}
                className={`hidden bedar-sc2:flex text-[1rem] font-[500] ${
                  activeElem === elem && "bg-mainColor text-white"
                } py-2 px-4 rounded-full transition-all ease-in`}
              >
                {elem}
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className={`text-textColor flex bedar-sc2:hidden`}
        >
          {isMenuHidden ? (
            <RxHamburgerMenu className="h-6 w-6" />
          ) : (
            <IoClose className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`mobile-menu flex fixed backdrop-blur bedar-sc2:hidden flex-col bg-[#ffffff] border-zinc-200 py-4 px-5 rounded-md gap-2 right-[1.22rem] top-[5rem] z-10 shadow-md border  ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        {navElements.map((elem, index) => (
          <a
            href={`#${elem}`}
            key={index}
            onClick={() => setActiveElem(elem)}
            className={`border border-zinc-200 px-12 py-2 text-center rounded-md cursor-pointer ${
              activeElem === elem ? "bg-mainColor text-white" : "bg-white"
            }`}
          >
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
