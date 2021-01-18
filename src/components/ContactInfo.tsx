import React from "react";
import Image from "next/image";

interface ContactInfoProps {
  title: string;
  url: string;
  href?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  url,
  href,
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="flex flex-col items-center justify-center p-4 "
      rel="noopener noreferrer"
    >
      <span className="mb-1 text-sm text-secondary-300">{title}</span>
      <Image
        className="text-green-200 fill-current "
        src={url}
        height="30px"
        width="30px"
        layout="fixed"
        objectPosition="50% 0%"
        priority
      />
    </a>
  );
};
