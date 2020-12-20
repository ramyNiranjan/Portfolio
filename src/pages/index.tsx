// import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { fetchIntoText } from "../contentfull/contenfullCMS";

interface introTextProps {
  [key: string]: string;
}

interface HomeProps {
  introInfo: introTextProps[];
}

export const Home: React.FC<HomeProps> = ({ introInfo }) => {
  // console.log(introInfo);
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
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
    <Layout title="Home | Next.js + TypeScript Example">
      <motion.div
        className="flex flex-col items-center justify-center w-full h-screen px-4 py-4 tracking-normal text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        exit="pageExit"
      >
        <div className="mb-4 text-4xl font-semibold leading-snug">
          <h1 className="text-white ">{introInfo[0].title}</h1>
          <motion.span className="text-primary-100" variants={childVariants}>
            {introInfo[0].name}
          </motion.span>
        </div>

        <Button
          title="View My Work"
          textSize="lg"
          textColor="white"
          borderColor="primary-300"
          variants={childVariants}
        />
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetchIntoText();
  const introInfo = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      introInfo,
    },
    revalidate: 60,
  };
}

export default Home;
