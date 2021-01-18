import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ToastProvider } from "react-toast-notifications";
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
      <ToastProvider>
        <Component
          {...pageProps}
          pageTransitionVariants={pageTransitionVariants}
        />
      </ToastProvider>
      ;
    </AnimatePresence>
  );
}

export default MyApp;
