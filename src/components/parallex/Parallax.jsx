import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

export const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #111132, #505064)" }}
    >
      <motion.h1 style={{ y: yText }}>What I Did</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};
