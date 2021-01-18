// import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { fetchIntoText, fetchSkills } from "../contentfull/contenfullCMS";
import ParticleContainer from "../components/ParticleContainer";
import { useRouter } from "next/router";

interface introTextProps {
  [key: string]: string;
}

interface HomeProps {
  introInfo: introTextProps[];
  skills: any;
}

export const Home: React.FC<HomeProps> = ({ introInfo, skills }) => {
  console.log(skills);
  const router = useRouter();
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        bounce: 0.5,
        staggerChildren: 0.6,
        when: "beforeChildren",
      },
    },
    pageExit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Layout title="Home">
      <motion.div
        className="flex flex-col items-center justify-center w-full h-screen px-4 py-4 tracking-normal text-center "
        key={router.route}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <div className="z-10 mb-4 text-4xl font-semibold leading-snug">
          <h1 className="text-white ">{introInfo[0].title}</h1>
          <motion.span className="text-primary-100" variants={childVariants}>
            {introInfo[0].name}
          </motion.span>
        </div>

        <ParticleContainer skills={skills} />
        <Button
          title="View My Work"
          textSize="lg"
          textColor="white"
          // borderColor="primary-300"
          onClick={() => router.push("/works")}
          variants={childVariants}
        />
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchIntoText();
  const skillres = await fetchSkills();
  const skills = await skillres.map((p: any) => {
    const {
      icon: {
        fields: {
          file: { url },
        },
      },
    } = p.fields;
    return { src: `https:${url}` };
  });
  const introInfo = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      introInfo,
      skills,
    },
    revalidate: 60,
  };
}

export default Home;
