import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { fetchprojects } from "../contentfull/contenfullCMS";
import ProjectCard from "../components/ProjectCard";

interface WorksProps {
  pageTransitionVariants: { [key: string]: {} };
  projects: any;
}

export const Works: React.FC<WorksProps> = ({
  pageTransitionVariants,
  projects,
}) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("All");
  const buttonNames = ["All", "Reactjs", "Nodejs", "Nextjs", "Vanillajs"];

  return (
    <Layout title="My Personal Projects">
      <motion.div
        className="mt-32"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <h1 className="mb-4 text-lg tracking-wider text-center text-white underline uppercase">
          Projects
        </h1>
        <div className="max-w-screen-md mx-auto">
          <div className="flex flex-wrap content-around justify-center px-4 ">
            {buttonNames.map((title, index) => (
              <Button
                key={index}
                title={title}
                textSize="sm"
                textColor="white"
                padY="2"
                onClick={() => setSelectedValue(title)}
                isActive={title === selectedValue}
              />
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid justify-center grid-flow-row-dense gap-5 grid-cols-auto-fill auto-rows-250">
            {projects &&
              projects
                .filter((item: any) => item.techStack.includes(selectedValue))
                .map((item, idx: number) => (
                  <ProjectCard key={idx} {...item} />
                ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchprojects();
  const projects = await res.map((p: any) => {
    const {
      name,
      githubRepo,
      techStack,
      websiteUrl,
      demoGify: {
        fields: {
          file: { url },
        },
      },
    } = p.fields;

    return { name, githubRepo, techStack, websiteUrl, url };
  });

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}

export default Works;
