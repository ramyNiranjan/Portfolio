import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  url: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ url }) => {
  return (
    <div className="relative">
      <Image
        className="absolute inset-0 object-cover w-full h-full bg-secondary-200"
        src={`http:${url}`}
        // height="250px"
        // width="250px"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        priority
      />
    </div>
  );
};

export default ProjectCard;
