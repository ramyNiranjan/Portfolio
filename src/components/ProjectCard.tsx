import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  url: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ url }) => {
  return (
    <div className="relative">
      <Image
        className="absolute inset-0 object-cover w-full h-full filter-grayscale"
        src={`http:${url}`}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default ProjectCard;
