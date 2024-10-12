import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (projectsPage && projectsPage.length > 0) {
      let btn = document.querySelector(".project-btn");

      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      { (projectsPage && projectsPage.length > 0) && 
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
            <div>
              <Link to={"/"} className="flex justify-center mt-9">
                <button className="project-btn bg-mainColor hover:bg-mainHover text-white py-3 px-4 rounded-full flex items-center gap-2 transition-all ease-linear">
                  More Projects{" "}
                  {isHovered ? (
                    <IoArrowBackOutline className="w-5 h-5 rotate-180" />
                  ) : (
                    <IoIosArrowForward className="w-5 h-5" />
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
