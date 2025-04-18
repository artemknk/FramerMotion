import React from 'react';
import styles from './Bauhaus.module.css';
import { motion } from 'framer-motion';

const textWrapper = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
  },
};

const textAppear = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1, ease: 'easeOut' },
  },
};

const rowStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5,
    },
  },
};

const rowItem = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const waveVariant = (delay = 0) => ({
  animate: {
    scale: [1, 0.85, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      delay,
    },
  },
});

const Bauhaus = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <motion.div
        className={styles.text}
        initial="hidden"
        animate="visible"
        variants={textWrapper}
        style={{ originX: 0.5 }}
      >
        <motion.span variants={textAppear} initial="hidden" animate="visible">
          BAUHAUS
        </motion.span>
        <motion.span variants={textAppear} initial="hidden" animate="visible">
          1923
        </motion.span>
      </motion.div>

      {/* Основной блок с кругами и волной */}
      <div className={styles.circles_container_1}>
        {[1, 2, 3, 4].map((i, index) => (
          <motion.div
            key={i}
            className={`${styles.circle} ${styles[`circle_${i}`]}`}
            variants={waveVariant(index * 0.3)}
            animate="animate"
          />
        ))}
      </div>

      {/* Нижний ряд кругов: поочерёдное появление слева направо */}
      <motion.div
        className={styles.cirles_container_2}
        variants={rowStaggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`${styles.circle_row} ${styles[`circle_row_${i}`]}`}
            variants={rowItem}
          />
        ))}
      </motion.div>
      </div>

    </div>
  );
};

export default Bauhaus;