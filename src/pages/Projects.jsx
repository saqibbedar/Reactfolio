import { Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col gap-4 mt-5 rounded-2xl px-6 bedar-sc2:px-16 py-6 bedar-sc2:py-10 border border-zinc-200"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="text-2xl font-medium">Projects</div>
        <hr className="h-[1px] w-full bg-zinc-200 border-none" />
      </div>
      <div>
        <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-5">
          {projectsPage.map(
            ({
              projectName,
              projectDescription,
              projectURL,
              githubRepository,
              tags,
              date,
            }) => (
              <Project
                key={1}
                projectName={projectName}
                projectDescription={projectDescription}
                projectURL={projectURL}
                githubRepository={githubRepository}
                tags={tags}
                date={date}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
