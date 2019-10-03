import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='buscador'>
    <h2>¿Qué quieres ver hoy?</h2>
    <input className='input inputRedondeado' type='text' placeholder='Buscar..' />
  </section>
);

export default Search;
