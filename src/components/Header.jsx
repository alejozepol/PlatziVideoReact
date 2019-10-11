import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '@alejozepol/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/ico-perfil.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='LogoPlatziVideo' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--perfil'>
          <p>Perfil</p>
          {hasUser ? (
            <img
              className='menu__perfil--perfil'
              src={gravatar(user.email)}
              alt={user.email}
            />
          ) : (
            <img
              className='menu__perfil--perfil'
              src={userIcon}
              alt='Icono Perfil'
            />
          )}
        </div>
        <ul>
          {hasUser ? (
            <li><a href='/'>{user.name}</a></li>
          ) : null}
          {hasUser ? (
            <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li>
          ) : (
            <li>
              <Link to='/login'>
              Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

