import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, titulo }) => (
  <section className='Categories'>
    <h3 className='Categories__title'>{titulo}</h3>
    {children}
  </section>
);

export default Categories;
