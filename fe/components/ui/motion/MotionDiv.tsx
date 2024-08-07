"use client";
import { motion, MotionProps } from "framer-motion";
import { HTMLProps } from "react";

type Props = HTMLProps<any> & MotionProps;
const MotionDiv = (props: Props) => {
  const { children, className, transition } = props;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateY: 10 },
        visible: { opacity: 1, translateY: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={{ amount: 0.2, once: true }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default MotionDiv;
