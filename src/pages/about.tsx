import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
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
  console.log(skills);
  // console.log(`http:${skills[0].url}`);
  const router = useRouter();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <motion.div
        className="mt-28"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <h1 className="text-lg tracking-wide text-center underline uppercase text-primary-300">
          About Me
        </h1>
        <img
          src="ramy.jpg"
          alt=""
          className="block object-cover w-32 h-32 mx-auto rounded-full"
        />
        <p className="px-6 leading-6 tracking-wide text-gray-300 break-all ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          suscipit illum ipsa facere dignissimos odit error et, recusandae
          praesentium ad provident enim labore a in quasi consequatur
          perferendis debitis officiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis suscipit illum ipsa facere dignissimos
          odit error et, recusandae praesentium ad provident enim labore a in
          quasi consequatur perferendis debitis officiis.
        </p>
        <h1 className="text-lg tracking-wide text-center underline uppercase text-primary-300">
          Skills
        </h1>
        <div className="relative w-full h-32 mx-auto overflow-hidden ">
          <div
            //animate-scroller
            className="absolute left-0 flex items-center justify-center w-full h-full overflow-hidden animate-scroller hover:scroller-stop"
            style={{ width: "200%" }}
          >
            {skills &&
              skills.map(({ title, url, width, height }) => (
                <Scroller key={title} url={url} width={width} height={height} />
              ))}
            {skills &&
              skills.map(({ title, url, width, height }) => (
                <Scroller key={title} url={url} width={width} height={height} />
              ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchSkills();
  const skills = await res.map((p) => {
    const {
      title,
      icon: {
        fields: {
          file: {
            url,
            details: {
              image: { width, height },
            },
          },
        },
      },
    } = p.fields;
    // console.log(title, url);

    return { title, url, width, height };
    // return p.fields;
  });
  return {
    props: {
      skills,
    },
    revalidate: 60,
  };
}

export default About;
