import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import Layout from "../components/Layout";
import { fetchSkills } from "../contentfull/contenfullCMS";
import Scroller from "../components/Scroller";

interface skillsProps {
  [key: string]: string;
}

interface aboutProps {
  pageTransitionVariants: { [key: string]: {} };
  skills: skillsProps[];
}

const About: React.FC<aboutProps> = ({ pageTransitionVariants, skills }) => {
  const router = useRouter();

  return (
    <Layout title="About me">
      <motion.div
        className="mt-28"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <h1 className="mb-4 text-2xl font-bold text-center text-secondary-300">
          About Me
        </h1>
        <div className="relative w-32 h-32 mx-auto mb-4 bg-red-100 rounded-full ">
          <img
            src="/ramyNew.jpg"
            alt="ramy's image"
            className="absolute inset-0 object-cover object-bottom w-full h-full bg-black rounded-full"
          />
        </div>

        <div className="max-w-screen-md mx-auto">
          <p className="px-8 mb-4 antialiased leading-7 tracking-wider break-words text-secondary-300 text-md">
            I am a junior full stack developer. I live in Stockholm and
            currently working as a frontend developer intern at
            <a
              target="_blank"
              href="https://redmind.se/"
              className="ml-1 font-bold"
              rel="noopener noreferrer"
            >
              Redmind
            </a>
            . I am well experienced in fullstack development but I also take
            pride in being a design nerd. I also have experience using a wide
            range of industry-standard tech stacks, which are listed in my
            skills section below. As a person, I like challenges and eager to
            learn new things, I am currently learning Python and Linux. My
            greatest strengths are my ability to understand and cater to a wide
            range of customer base, and the ability to integrate my
            multicultural exposure to build sophisticated applications.
          </p>
        </div>

        <h1 className="text-2xl font-bold text-center text-secondary-300">
          Skills
        </h1>
        <div className="flex flex-wrap justify-around pr-8 overflow-hidden content-evenly h-80 sm:hidden">
          {skills &&
            skills.map(({ title, url, iconTitle }) => (
              <Scroller key={title} url={url} iconTitle={iconTitle} />
            ))}
        </div>
        <div className="hidden sm:block">
          <div className="relative w-3/5 mx-auto overflow-hidden h-80 ">
            <div
              className="absolute left-0 flex flex-wrap w-full h-full overflow-hidden justify-evenly hover:scroller-stop animate-scroller"
              style={{ width: "200%" }}
            >
              <div className="flex flex-wrap items-center justify-between w-1/2 ">
                {skills &&
                  skills.map(({ title, url, iconTitle }) => (
                    <Scroller key={title} url={url} iconTitle={iconTitle} />
                  ))}
              </div>

              <div className="flex flex-wrap items-center justify-between w-1/2 ">
                {skills &&
                  skills.map(({ title, url, iconTitle }) => (
                    <Scroller key={title} url={url} iconTitle={iconTitle} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchSkills();

  const skills = await res.map((p: any) => {
    const {
      title,
      icon: {
        fields: {
          file: { url },
          title: iconTitle,
        },
      },
    } = p.fields;
    return { title, url, iconTitle };
  });

  return {
    props: {
      skills,
    },
    revalidate: 60,
  };
}

export default About;
