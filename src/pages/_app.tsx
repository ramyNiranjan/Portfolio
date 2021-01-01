import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const pageTransitionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    pageExit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        type: "tween",
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <Component
        {...pageProps}
        pageTransitionVariants={pageTransitionVariants}
      />
      ;
    </AnimatePresence>
  );
}

export default MyApp;
