import style from './ColorLetter.module.css';
import { motion } from 'framer-motion';

const textWrapper = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
  },
};

function ColorLetter() {
  return (
    <div class={style.blend_wrapper}>
      <div class={style.container}>
        <div class={style.blend_container}>
          <motion.span variants={textWrapper} initial="hidden" animate="visible" class={`${style.letter} ${style.s1}`}>S</motion.span>
          <motion.span variants={textWrapper} initial="hidden" animate="visible" class={`${style.letter} ${style.s2}`}>S</motion.span>
          <motion.span variants={textWrapper} initial="hidden" animate="visible"class={`${style.letter} ${style.s3}`}>S</motion.span>
        </div>
      </div>

    </div>
  )
}

export default ColorLetter
