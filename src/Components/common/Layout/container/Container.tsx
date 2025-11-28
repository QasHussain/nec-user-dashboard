import { motion } from "framer-motion";
import { CSSProperties } from "react";

import styles from "./Container.module.scss";

const routeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Container = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={routeVariants}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        ...style,
      }}
      className={styles.container}>
      {children}
    </motion.div>
  );
};

export default Container;
