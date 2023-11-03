import projectCard from '../shared/projects'
import './style/projects.css'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
		<article className="project-container">
			<h2 className='project-titleSection'>PROYECTOS</h2>

			<motion.section
				initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
			> 
				<section className="project-cardContainer">
					{projectCard?.map((cardP) => (
						
							<div key={cardP.id} className="project-card">

								<h2>{cardP.name}</h2>
								<img className="project-cardImage" src={cardP.image} alt="" />
								<p className='project-cardDescrip'>{cardP.description}</p>

								<button className='project-btnContainer'>
									<a className='project-btnLink'  href={cardP.link} target="_blank">Visitar Web</a>
								</button>

								<div className="project-iconTech">
									{cardP.tech.map((tec) => (
										<img key={tec.id} src={tec.icon} />
									))}
								</div>

							</div>
						
					))}
				</section>
			</motion.section> 

		</article>
	);
}

export default Projects
