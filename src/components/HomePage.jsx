import {Link} from 'react-router-dom'
import TypewriterComponent from "typewriter-effect"
import { motion } from 'framer-motion'
import './style/home.css'
import img3d from '../assets/imagen3D.png'



const HomePage = () => {
  return (
    <main className="home-container">
    
      <motion.img
        initial={{ opacity: 0, scale: 3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        src={img3d}
        alt="Logo"
        className="home-image"
      />

      <div className='home-textContainer'>

        <h2>Welcome👋</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} 
        >
          <div>
            <h2 className="home-textName">i'm</h2>
            <h2 className="home-textName">Aldo Campos</h2>
          </div>
        </motion.div>

        <h2 className="home-textDinamic">
          <TypewriterComponent
            options={{
              strings: [ "Full-Stack", "Front-End", "Back-End", "Freelancer"],
              autoStart: true,
              loop: true,
              cursor: '|'
            }}
          />
        </h2>
        <h2>Developer</h2>

      </div>
  
      <button className='home-btn'>
        <a href='/a.pdf' download={''}>Download CV</a>
      </button>
    
    </main>
  )
}

export default HomePage
