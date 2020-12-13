import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

interface WorksProps {}

export const Works: React.FC<WorksProps> = ({}) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="mt-22">
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
        <Button size="sm" textColor="white" bgColor="blue-500">
          Hello
        </Button>
      </div>
    </Layout>
  );
};

export default Works;
