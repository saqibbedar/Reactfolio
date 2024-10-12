import { skillsPage } from "../assets/assets.js";
import { PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";

const Skills = () => {
  return (
    <>
      {(skillsPage && skillsPage.length > 0) && (
        <div id="Skills" className={`${containerStyle}`}>
          <PageTitle title={"Skills"} />
          <div className="flex gap-4 text-white flex-wrap justify-center bedar-sc1:justify-start">
            {skillsPage.map((Skill) => (
              <Skill className="h-16 w-16 bg-mainColor cursor-pointer p-2 rounded shadow-md shadow-[#000]/15 " />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
