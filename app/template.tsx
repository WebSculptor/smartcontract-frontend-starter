"use client";

import { motion } from "framer-motion";

export default function Template({ children }: ILayout) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.95 }}>
      <div className="fixed inset-0 -z-10 size-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {children}
    </motion.div>
  );
}
