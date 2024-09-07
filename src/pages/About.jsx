import { Link } from "react-router-dom";
import { authorDetails } from "../assets/assets";

const About = () => {
  const { authorProfile, authorDescription, getInTouchUrl } = authorDetails;
  return (
    <>      
      <div className="flex justify-between items-center gap-4 px-20">
        <div className="w-1/2 flex flex-col gap-4">
          <div>Hi there,</div>
          <div>{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-[#373f51] text-white px-4 py-2 rounded-full w-fit hover:bg-[#424a64] transition-all ease-in-out text-[1rem]"
          >
            Get In Touch
          </Link>
        </div>
        <div className="w-1/2 flex justify-end pr-4">
          <div className="w-[25rem] h-[25rem] my-5 rounded-md overflow-hidden">
            <img src={authorProfile} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
