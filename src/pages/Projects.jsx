import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";

const Projects = () => {
  return (
    <div id="Projects" className={`${containerStyle}`}>
      <PageTitle title={"Projects"} />
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
