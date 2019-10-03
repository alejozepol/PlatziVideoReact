import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/app.scss';
import CarruselContainer from '../components/CarruselContainer';
import CarruselItems from '../components/CarruselItems';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Categories titulo='Mi Lista'>
      <CarruselContainer>
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
      </CarruselContainer>
    </Categories>
    <Categories titulo='Nuevo en Platzi Videos'>
      <CarruselContainer>
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
        <CarruselItems />
      </CarruselContainer>
    </Categories>
    <Footer />
  </div>
);

export default App;
