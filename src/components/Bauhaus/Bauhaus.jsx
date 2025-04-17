import { motion } from "framer-motion";
import style from "./Bauhaus.module.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const circleVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function BauhausIntro() {
  const circles = [
    { color: "#E9C46A", size: 600 },
    { color: "#F4A261", size: 500 },
    { color: "#F77F00", size: 400 },
    { color: "#E63946", size: 300 }
  ];

  return (
    <motion.div
      className={style.bauhaus}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={style.bauhausContainer}>
        {circles.map((c, i) => (
          <motion.div
            key={i}
            variants={circleVariant}
            style={{
              zIndex: i,
              position: "relative",
              top: `-${i * 450}px`,
              left: `-${i * 50}px`,
              border: `150px solid ${c.color}`,
              width: c.size,
              height: c.size,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
      .
    </motion.div>
  );
}