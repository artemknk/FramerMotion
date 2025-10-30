import style from './RussianAvangard.module.css';
import { motion } from 'framer-motion';

function RussianAvangard() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.avangard_container}>
          <motion.div className={style.avangard_box}>
            <motion.div className={style.avangard_triangle}/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RussianAvangard
