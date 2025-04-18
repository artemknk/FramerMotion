import style from './Gradient.module.css';
import { motion } from 'framer-motion';

const boxCouner = 60;
function Gradient() {
  return (
    <div className={style.gradient}>
      <div className={style.container}>
        <div className={style.gradient_container}>
          {[...Array(boxCouner)].map((_, index) => (
          <motion.div
            key={index} 
            className={style.gradient_box}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: index * 0.02 } }}
            whileHover={{ scale: 0.8, transition: { duration: 0.3 } }}
           ></motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Gradient
