// import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Layout from "../components/Layout";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
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
        staggerChildren: 0.4,
        when: "beforeChildren",
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
        className="flex  px-4 text-center flex-col justify-center items-center   w-full h-screen  py-4 tracking-normal"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="font-semibold text-4xl  leading-snug mb-4">
          <h1 className="text-white ">Hello, I’m Ramy Niranjan. I’m a</h1>
          <motion.span className="text-primary-100" variants={childVariants}>
            fullstack developer.
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

export default Home;
