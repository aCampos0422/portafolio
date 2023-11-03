import './style/about.css'
import stackTech from '../shared/stackTech'
import { motion } from 'framer-motion'
import aldo from '../assets/aldo2.jpg'

const About = () => {
  return (
    <article className='about-container'>

      <h2 className='about-title'>Sobre mi</h2>
      <section className='about-descripCont'>
        <motion.img
          initial={{ opacity: 0, scale: 3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          src={aldo}
          alt="aldodev"
          className="about-devImage"
        />
        
        <p>Mi nombre es <span className='about-nameDev'>Aldo Campos</span>, ingeniero civil de profesión pero apasionado por el mundo de la tecnología. Decidí aprender a como desarrollar aplicaciones y páginas web, impulsado por la curiosidad y la exploración de nuevos caminos. </p>

        <p>En mi formación como desarrollador web fullStack he aprendido tecnologias con las que puedo ofrecer soluciones innovadoras en la creación de software de manera freelancer o para alguna empresa. Siempre estoy en constante aprendizaje para mantenerme a la vanguardia en esta industria de rápido crecimiento</p>

        <button className='about-btn'>
        <a href='/a.pdf' download={''}>Descargar CV</a>
        </button>

      </section>

      <section>
        <h2 className='about-title' >Habilidades</h2>
        <div className='about-techContainer'>
          {
            stackTech?.map(tech => (
             
              <img key={tech.id} className='about-techImg' src={tech.img} alt="" />
              
            ))
          }
        </div>
      </section>

    </article>
  )
}

export default About
