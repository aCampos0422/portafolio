import { Link } from 'react-router-dom';
import { useState } from 'react';
import aldoLogo from '../assets/aldoLogo.png'
import './style/navbar.css'


const Navbar = () => {

  const [navOn, setNavOn] = useState('nav-listContainer');
  const [navOff, setNavOff] = useState('nav-listOff');

  const navegation = () => {
    navOn === 'nav-listContainer' ? setNavOn('nav-listOff') : setNavOn('nav-listContainer');

    navOff === 'nav-listOff' ? setNavOff('nav-listContainer') : setNavOff('nav-listOff');
  }

  return (
    <nav className='nav-container'>

      <div className='nav-headerContainer'>
        <Link to='/'>
          <img className='nav-imageLogo' src={aldoLogo} alt="" />
        </Link>
          <button onClick={navegation} className='nav-btn'>
            <i className={navOn === 'nav-listContainer' ? 'bx bx-list-ul' : 'bx bxs-x-square'}></i>
          </button>
      </div>
      
      <ul className={navOff}>
        <Link to='/about'>
          <li>Sobre mi</li>
        </Link>
        <Link to='/projects'>
          <li>Proyectos</li>
        </Link>
        <Link to='/contact'>
          <li>Contacto</li>
        </Link>
      </ul>
  
    </nav>
  )
}

export default Navbar;
