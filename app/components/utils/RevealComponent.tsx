import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      whileInView={variants.visible}
      initial={variants.hidden}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
