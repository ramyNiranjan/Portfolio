import React from "react";
import Image from "next/image";
import Button from "./Button";

interface ProjectCardProps {
  [key: string]: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  name,
  githubRepo,
  techStack,
  websiteUrl,
}) => {
  const newTechStack = techStack.replace(/\/All/, "");
  return (
    <div className="relative">
      <Image
        className="absolute inset-0 object-cover w-full h-full filter-dropshadow "
        src={`http:${url}`}
        // height="250px"
        // width="250px"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center object-cover w-full h-full bg-gray-800 opacity-0 trans-ease-out justify-evenly hover:opacity-90">
        <div>
          <h4 className="text-xl text-center text-primary-100">{name}</h4>
          <div className="flex text-gray-300">
            <span className="tracking-wider">{newTechStack}</span>
            {/* <span>vanillajs</span> */}
          </div>
        </div>
        <div className="flex justify-around w-full text-gray-300">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            Live Demo
          </a>
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
          >
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
