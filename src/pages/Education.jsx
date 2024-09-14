import { Link } from "react-router-dom";
import { EducationPage } from "../assets/assets";
import { LuGraduationCap } from "react-icons/lu";
import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";

const Education = () => {
  return (
    <div id="Education" className={`${containerStyle}`}>
      <PageTitle title={"Education"} />
      <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 bedar-sc2:gap-4">
        {EducationPage.map(
          ({ degreeType, graduationYear, institution, institutionUrl }) => (
            <div
              key={2}
              className="flex flex-col gap-4 my-2 bg-mainColor text-white rounded-md px-8 py-6 shadow-md shadow-[#000]/15"
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
