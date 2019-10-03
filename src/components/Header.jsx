import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/ico-perfil.svg';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='LogoPlatziVideo' />
    <div className='header__menu'>
      <div className='header__menu--perfil'>
        <p>Perfil</p>
        <img className='menu__perfil--perfil' src={userIcon} alt='Icono Perfil' />
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
