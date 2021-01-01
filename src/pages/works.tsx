import React from "react";
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
  console.log(projects);
  const buttonNames = ["All", "Reactjs", "Nodejs", "Nextjs", "Vanillajs"];

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <motion.div
        className="mt-32"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <h1 className="mb-4 text-lg tracking-wider text-center underline uppercase text-primary-300">
          Projects
        </h1>
        <div className="max-w-screen-md mx-auto">
          <div className="flex flex-wrap content-around justify-around px-4 py-4">
            {buttonNames.map((title, index) => (
              <Button
                key={index}
                title={title}
                textSize="sm"
                textColor="white"
                // borderColor="primary-300"
                padY="2"
              />
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid justify-center grid-flow-row-dense gap-5 grid-cols-auto-fill auto-rows-250">
            {projects &&
              projects.map(({ url }, idx: number) => (
                <ProjectCard key={idx} url={url} />
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

    console.log(p);
    return { name, githubRepo, techStack, websiteUrl, url };
  });

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Works;
