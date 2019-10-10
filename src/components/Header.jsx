import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/ico-perfil.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='LogoPlatziVideo' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--perfil'>
        <p>Perfil</p>
        <img className='menu__perfil--perfil' src={userIcon} alt='Icono Perfil' />
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li>
          <Link to='/login'>
            Iniciar Sesión
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
