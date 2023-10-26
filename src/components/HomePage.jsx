import {Link} from 'react-router-dom'
import TypewriterComponent from "typewriter-effect"
import './style/home.css'
import img3d from '../assets/imagen3D.png'

const HomePage = () => {
  return (
    <main className="home-container">
      <img src={img3d} alt="" />
      <h2>Welcome👋</h2>
      <h2 className="home-textName">i'm Aldo Campos</h2>
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

      <Link to='/contact'>
        <button className='home-btnContact'>Contact Me</button>
      </Link>    
    </main>
  )
}

export default HomePage
