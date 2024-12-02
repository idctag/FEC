"use client";
import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  classname?: string;
}

const Reveal = ({ children, classname }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={cn("w-full h-full", classname)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
