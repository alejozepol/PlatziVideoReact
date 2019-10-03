import React from 'react';
import Proptypes from 'prop-types';
import '../assets/styles/components/CarruselItems.scss';

const CarruselItems = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrusel--item'>
    <img className='carrusel--item__img' src={cover} alt={title} />
    <div className='carrusel--item__detalle'>
      <div>
        <img src='https://img.icons8.com/bubbles/50/000000/play.png' alt='play' width='50px' height='50px' />
        <img src='https://img.icons8.com/plasticine/100/000000/plus-math.png' alt='mas' width='50px' height='50px' />
      </div>
      <p className='carrusel--item__detalle--titulo'>{title}</p>
      <p className='carrusel--item__detalle--subtitulo'>
        { `${year} ${contentRating} ${duration}` }
      </p>
    </div>
  </div>
);

CarruselItems.prototype = {
  cover: Proptypes.string,
  title: Proptypes.string,
  year: Proptypes.number,
  contentRating: Proptypes.string,
  duration: Proptypes.number,
};

export default CarruselItems;
