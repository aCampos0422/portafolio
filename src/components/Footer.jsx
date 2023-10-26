import './style/footer.css'
import github from '../assets/svgIcons/github.svg'
import linkedin from '../assets/svgIcons/linkedin.svg'
import whats from '../assets/svgIcons/whatsapp.svg'


const Footer = () => {

  return (
    <footer className='footer-container'>
      <nav className='footer-iconContainer'>
        <span></span>
        <div className='footer-socialContainer'>

          <a href="https://github.com/aCampos0422" target='_blank'>
            <img className='github' src={github} alt="git" />
          </a>

          <a href="http://linkedin.com/in/aldo-campos-p-9653ab159" target='_blank'>
            <img  src={linkedin} alt="linkdin" />
          </a>

          <a href="https://wa.link/vc0vvy" target='_blank'>
            <img src={whats} alt="whatsapp" />
          </a>

        </div>
        <span></span>
      </nav>

      <h4>Todos los Derechos Reservados 2023 ©</h4>
    </footer>
  )
}

export default Footer
