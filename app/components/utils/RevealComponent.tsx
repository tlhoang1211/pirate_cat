import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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

  // return (
  //   <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
  //     <motion.div
  //       variants={{
  //         hidden: { opacity: 0 },
  //         visible: { opacity: 1 },
  //       }}
  //       initial="hidden"
  //       animate={mainControls}
  //       transition={{ duration: 0.5, delay: 0.25 }}
  //     >
  //       {children}
  //     </motion.div>
  //     <motion.div
  //       variants={{
  //         hidden: { opacity: 0 },
  //         visible: { opacity: 1 },
  //       }}
  //       initial="hidden"
  //       animate={slideControls}
  //       transition={{ duration: 0.5, ease: "easeIn" }}
  //       style={{
  //         position: "absolute",
  //         top: 4,
  //         bottom: 4,
  //         left: 0,
  //         right: 0,
  //         background: "var(--brand)",
  //         zIndex: 20,
  //       }}
  //     >
  //       {children}
  //     </motion.div>
  //   </div>
  // );
};
