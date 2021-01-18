import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { TextInput } from "../components/TextInput";
import { schemaContact } from "../utils/validationSchema";
import axios from "axios";

interface WorksProps {
  pageTransitionVariants: { [key: string]: {} };
}

const Contact: React.FC<WorksProps> = ({ pageTransitionVariants }) => {
  const router = useRouter();
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schemaContact),
  });
  const { addToast } = useToasts();
  const onSubmit = ({ name, email, message }, e) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xjvplvgp",
      data: { name, email, message },
    })
      .then(() => {
        addToast("Thank you,your message has been submitted.", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch(() => {
        addToast("Sorry,something went wrong, please try again later.", {
          appearance: "error",
          autoDismiss: true,
        });
      });
    e.target.reset();
  };
  return (
    <Layout title="Contact me">
      <motion.div
        className="h-screen mt-22"
        key={router.route}
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="pageExit"
      >
        <div className="flex flex-col items-center justify-start w-full min-h-full ">
          <h1 className="text-2xl text-center text-secondary-300">
            Contact me
          </h1>
          <h4 className="text-xl text-center text-primary-300">
            Have a question or want to work together
          </h4>
          <div className="w-full mx-auto md:w-1/2">
            <form
              noValidate
              className="flex flex-col items-center justify-between w-full "
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <TextInput
                register={register}
                errors={errors}
                name="name"
                type="text"
                placeHolder="Enter your name"
              />
              <TextInput
                name="email"
                type="email"
                placeHolder="Enter your email"
                register={register}
                errors={errors}
              />
              <TextInput
                name="message"
                placeHolder="Enter your message"
                textarea
                register={register}
                errors={errors}
              />
              <div className="mt-4">
                <Button
                  title="Submit"
                  textSize="sm"
                  textColor="white"
                  padY="2"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
