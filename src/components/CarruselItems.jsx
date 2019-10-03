import React from 'react';
import '../assets/styles/components/CarruselItems.scss';

const CarruselItems = () => (
  <div className='carrusel--item'>
    <img className='carrusel--item__img' src='https://images.pexels.com/photos/2326201/pexels-photo-2326201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='imagen1' />
    <div className='carrusel--item__detalle'>
      <div>
        <img src='https://img.icons8.com/bubbles/50/000000/play.png' alt='play' width='50px' height='50px' />
        <img src='https://img.icons8.com/plasticine/100/000000/plus-math.png' alt='mas' width='50px' height='50px' />
      </div>
      <p className='carrusel--item__detalle--titulo'>Titulo Descriptivo</p>
      <p className='carrusel--item__detalle--subtitulo'>2019 16+ 140min</p>
    </div>
  </div>
);

export default CarruselItems;
