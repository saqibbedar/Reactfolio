import { Link } from "react-router-dom";
import { authorDetails } from "../assets/assets";

const About = () => {
  const { authorProfile, authorDescription, getInTouchUrl } = authorDetails;
  return (
    <>      
      <div className="flex flex-col bedar-sc1:flex-row justify-between items-center gap-4 mt-5 rounded-2xl px-10 bedar-sc1:px-16 pt-10 pb-5 bedar-sc2:py-10 border border-zinc-200 ">
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <div>Hi there,</div>
          <div>{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-[#373f51] text-white px-4 py-2 rounded-full w-fit hover:bg-[#424a64] transition-all ease-in-out text-[1rem]"
          >
            Get In Touch
          </Link>
        </div>
        <div className="w-full bedar-sc1:w-1/2 flex justify-center bedar-sc1:justify-end">
          <div className="w-full h-full bedar-sc2:w-[25rem] bedar-sc2:h-[25rem] my-5 rounded-2xl overflow-hidden">
            <img src={authorProfile} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
