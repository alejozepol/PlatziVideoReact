/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Search from '../components/Search';
import CarruselContainer from '../components/CarruselContainer';
import CarruselItems from '../components/CarruselItems';
import Categories from '../components/Categories';
import UseInitialState from '../hooks/UseInitialState';
import '../assets/styles/Home.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = UseInitialState(API);
  return (
    <>
      <Search />
      { initialState.mylist.length > 0 && (
        <Categories titulo='Mi Lista'>
          <CarruselContainer>
            {initialState.mylist.map((item) => <CarruselItems key={item.id} {...item} />) }
          </CarruselContainer>
        </Categories>
      )}
      <Categories titulo='Tendencia'>
        <CarruselContainer>
          {initialState.trends.map((item) => <CarruselItems key={item.id} {...item} />) }
        </CarruselContainer>
      </Categories>
      <Categories titulo='Originales de Platzi Video'>
        <CarruselContainer>
          {initialState.originals.map((item) => <CarruselItems key={item.id} {...item} />) }
        </CarruselContainer>
      </Categories>
    </>
  );
};

export default Home;
