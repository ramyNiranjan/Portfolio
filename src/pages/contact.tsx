import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

interface WorksProps {
  pageTransitionVariants: { [key: string]: {} };
}

const Contact: React.FC<WorksProps> = ({ pageTransitionVariants }) => {
  const router = useRouter();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <motion.div
        className="mt-22"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <div className="h-96 bg-blue-300">ramy</div>
        <div className="h-96 bg-blue-300">Niranjan</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
        <div className="h-96 bg-blue-300">hello</div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
