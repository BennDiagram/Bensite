import React from "react";
import { motion } from "framer-motion";
import { Project } from "./types";

//defines properties for the component
interface ProjectCardProps {
  project: Project;
}

//initializes the ProjectCard component with the defined properties
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [whileHover, setHover] = React.useState(false);
  return (
    <motion.div className="project-card">
      <div className="image-container">
        <img src={whileHover ? project.gif : project.still} alt="placeholder" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
