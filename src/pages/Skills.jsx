import { skillsPage } from "../assets/assets.js";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex flex-col gap-4 mt-5 rounded-2xl px-6 bedar-sc2:px-16 py-6 bedar-sc2:py-10 border border-zinc-200"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="text-2xl font-medium">Skills</div>
        <hr className="h-[1px] w-full bg-zinc-200 border-none" />
      </div>
      <div className="flex gap-4 text-white flex-wrap justify-center bedar-sc1:justify-start">
        {skillsPage.map((Skill) => (
          <Skill className="h-16 w-16 bg-[#373f51] cursor-pointer p-2 rounded shadow-md shadow-[#000]/15 " />
        ))}
      </div>
    </div>
  );
}

export default Skills
