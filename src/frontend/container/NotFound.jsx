import React from 'react';
import icoNotFound from '../assets/static/emogiMuerte.png';
import '../assets/styles/NotFound.scss';

const NotFound = () => (
  <div className='NotFound'>
    <img className='NotFound-emogi pulse' src={icoNotFound} alt='Pagina No encontrada' />
    <div className='NotFound-text'>
      <h1>404</h1>
      <h2>Pagina no encontrada</h2>
    </div>
  </div>
);

export default NotFound;
