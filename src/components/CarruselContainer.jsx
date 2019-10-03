import React from 'react';
import '../assets/styles/components/CarruselContainer.scss';

const CarruselContainer = ({ children }) => (
  <section className='carrusel'>
    <div className='carrusel__contenedor'>
      {children}
    </div>
  </section>
);

export default CarruselContainer;
