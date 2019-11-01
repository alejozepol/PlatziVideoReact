import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import icoRemove from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarruselItems.scss';

const CarruselItems = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDelteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carrusel--item'>
      <img className='carrusel--item__img' src={cover} alt={title} />
      <div className='carrusel--item__detalle'>
        <div>
          <Link to={`player/${id}`}>
            <img
              src='https://img.icons8.com/bubbles/50/000000/play.png'
              alt='play'
              width='50px'
              height='50px'
            />
          </Link>
          {isList ? (
            <img
              src={icoRemove}
              alt='Eliminar'
              onClick={() => handleDelteFavorite(id)}
            />
          ) : (
            <img
              src='https://img.icons8.com/plasticine/100/000000/plus-math.png'
              alt='mas'
              width='50px;'
              height='50px;'
              onClick={handleSetFavorite}
            />
          )}

        </div>
        <p className='carrusel--item__detalle--titulo'>{title}</p>
        <p className='carrusel--item__detalle--subtitulo'>
          { `${year} ${contentRating} ${duration}` }
        </p>
      </div>
    </div>
  );
};

CarruselItems.prototype = {
  cover: Proptypes.string,
  title: Proptypes.string,
  year: Proptypes.number,
  contentRating: Proptypes.string,
  duration: Proptypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarruselItems);

