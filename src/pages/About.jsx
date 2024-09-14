import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";

const {
  authorProfile,
  authorDescription,
  getInTouchUrl,
  authorName,
  profileImgTagLine,
} = AboutPage;

const About = () => {

  return (
    <>
      <div
        className={`bg-mainColor text-white flex flex-col bedar-sc1:flex-row justify-between items-center gap-6 mt-[.5rem] bedar-sc2:mt-2 rounded-2xl px-6 bedar-sc2:px-10 bedar-sc1:px-16  pt-8 pb-5 bedar-sc2:py-10 border border-zinc-200`}
        id="About"
      >
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <div className="text-3xl">
            Hi, I am <strong className="text-[#fedf89]">{authorName}</strong>
          </div>
          <div className="leading-7 text-lg ">{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-white text-textColor px-4 py-2 rounded-full w-fit hover:bg-[#fedf89] hover:text-textColor font-semibold transition-all ease-linear text-[1rem]"
          >
            Get In Touch
          </Link>
        </div>
        <div className="w-full bedar-sc1:w-1/2 flex justify-center bedar-sc1:justify-end">
          <div className="relative w-full h-full bedar-sc2:w-[25rem] bedar-sc2:h-[25rem] rounded-2xl cursor-pointer shadow-md border transition-shadow ease-linear hover:shadow-lg overflow-hidden group">
            <img src={authorProfile} className="w-full h-full" />
            <div
              className={`absolute bottom-0 text-white w-full px-4 py-3 backdrop-blur-[10px] flex gap-1 justify-center flex-wrap text-center transition-all ease-linear invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
            >
              <span>{authorName}:</span>
              <span>{profileImgTagLine}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
