import { Link } from "react-router-dom";
import { EducationPage } from "../assets/assets";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
  return (
    <div
      id="Education"
      className="flex flex-col gap-4 mt-5 rounded-2xl px-6 bedar-sc2:px-16 py-6 bedar-sc2:py-10 border border-zinc-200 "
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="text-2xl font-medium">Education</div>
        <hr className="h-[1px] w-full bg-zinc-200 border-none" />
      </div>
      <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 bedar-sc2:gap-4">
        {EducationPage.map(
          ({ degreeType, graduationYear, institution, institutionUrl }) => (
            <div
              key={2}
              className="flex flex-col gap-4 my-2 bg-[#373f51] text-white rounded-md px-8 py-6 shadow-md shadow-[#000]/15"
            >
              <div>
                <div>{graduationYear}</div>
                <div className="mt-1">{degreeType}</div>
              </div>
              <div className="flex items-center gap-3">
                <LuGraduationCap className="w-7 h-7" />
                <Link
                  to={institutionUrl}
                  className="hover:text-white/65 transition-colors ease-linear"
                >
                  {institution}
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Education;
