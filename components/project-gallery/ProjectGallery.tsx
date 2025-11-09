import React from "react";
import { motion } from "framer-motion";
import { Project } from "./types";
import "./ProjectGallery.scss";
import ProjectCard from "./ProjectCard";

const ProjectGallery: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Haven Website",
      description: "The website for the Pittsburgh-based music venue Haven",
      gif: "../../media/bensite/HavenPreview.gif",
      still: "../../media/bensite/HavenPreviewStill.jpg",
    },
    {
      title: "Mushroom: The Bad Trip",
      description:
        "A short, absurd game built in Unity for a game development course",
      gif: "../../media/bensite/MushroomPreviewLowres.gif",
      still: "../../media/bensite/MushroomPreviewStill.jpeg",
    },
    {
      title: "Project 3",
      description: "Placeholder description for the project.",
      gif: "../../media/bensite/HavenPreview.gif",
      still: "../../media/bensite/HavenPreviewStill.jpg",
    },
    {
      title: "Project 4",
      description: "Placeholder description for the project.",
      gif: "../../media/bensite/HavenPreview.gif",
      still: "../../media/bensite/HavenPreviewStill.jpg",
    },
  ];

  return (
    <div className="project-gallery">
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </div>
  );
};

export default ProjectGallery;
