import style from './ColorLetter.module.css';
import { motion } from 'framer-motion';

const textWrapper = {
  hidden: { 
    x: -1000,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
  },
};

const textAppear = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1, ease: 'easeOut' },
  },
};

const rowStaggerContainer = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1, ease: 'easeOut' },
  },
};


function ColorLetter() {
  return (
    <div className={style.blend_wrapper}>
      <div className={style.container}>
        <div className={style.blend_container}>
          <motion.span variants={rowStaggerContainer} initial="hidden" animate="visible" className={`${style.letter} ${style.s1}`}>S</motion.span>
          <motion.span variants={textWrapper} initial="hidden" animate="visible" className={`${style.letter} ${style.s2}`}>S</motion.span>
          <motion.span variants={textAppear} initial="hidden" animate="visible" className={`${style.letter} ${style.s3}`}>S</motion.span>
        </div>
      </div>

    </div>
  )
}

export default ColorLetter
