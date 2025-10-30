import style from './Gradient.module.css';
import { motion } from 'framer-motion';

const boxCount = 60;
const colors = ['#ff00c3', '#cc05d5', '#7608aa', '#380980', '#110855', '#050b2b'];

function Gradient() {
  return (
    <div className={style.gradient}>
      <div className={style.container}>
        <div className={style.gradient_container}>
          {[...Array(boxCount)].map((_, index) => (
            <motion.div
              key={index}
              className={style.gradient_box}
              initial={{ 
                opacity: 0,
                x: 1000, // Начальное положение за пределами контейнера справа
                scale: 0.5,
                rotate: Math.random() * 360 // Случайный начальный поворот
              }}
              animate={{ 
                opacity: 1,
                x: 0, // Конечное положение по центру
                scale: 1,
                rotate: 0,
                transition: { 
                  duration: 1.5, 
                  delay: index * 0.05,
                  type: 'spring',
                  damping: 10,
                  stiffness: 50
                }
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
                mixBlendMode: 'screen',
                transition: { duration: 0.3 }
              }}
              style={{
                background: `linear-gradient(165deg, ${colors[index % colors.length]}, ${colors[(index + 2) % colors.length]})`,
                mixBlendMode: index % 2 === 0 ? 'overlay' : 'hard-light'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gradient;
