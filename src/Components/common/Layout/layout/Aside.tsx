import { motion } from "framer-motion";

interface AsideProps {
  isCollapsible: boolean;
  children: React.ReactElement;
}
const variants = {
  open: { minWidth: "22rem" },
  collapsed: { minWidth: "0" },
};

const Aside = ({ isCollapsible, children }: AsideProps) => {
  return (
    <motion.aside
      animate={isCollapsible ? "collapsed" : "open"}
      variants={variants}
      transition={{ duration: isCollapsible ? 0.5 : 0.1 }}
      className="sidebar">
      {children}
    </motion.aside>
  );
};

export default Aside;
