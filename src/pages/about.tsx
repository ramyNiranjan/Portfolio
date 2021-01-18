import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import Layout from "../components/Layout";
import { fetchSkills, fetchAboutMe } from "../contentfull/contenfullCMS";
import Scroller from "../components/Scroller";

interface skillsProps {
  [key: string]: string;
}

interface aboutProps {
  pageTransitionVariants: { [key: string]: {} };
  skills: skillsProps[];
  content: any;
}

const About: React.FC<aboutProps> = ({
  pageTransitionVariants,
  skills,
  content,
}) => {
  const router = useRouter();
  const aboutMeInfo = content[0]?.content[0]?.value;
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
        <h1 className="mb-4 text-lg tracking-wider text-center underline uppercase text-primary-300">
          About Me
        </h1>
        <img
          src="ramy.jpg"
          alt=""
          className="block object-cover w-32 h-32 mx-auto mb-4 rounded-full"
        />
        {aboutMeInfo && (
          <div className="max-w-screen-md mx-auto">
            <p className="px-6 mb-4 leading-7 tracking-wider break-words text-secondary-300">
              {aboutMeInfo}
            </p>
          </div>
        )}

        <h1 className="text-lg tracking-wider text-center underline uppercase text-primary-300">
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
  const aboutMe: any = await fetchAboutMe();
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

  const {
    fields: {
      about: { content },
    },
  } = await aboutMe[0];

  return {
    props: {
      skills,
      content,
    },
    revalidate: 60,
  };
}

export default About;
