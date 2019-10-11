/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import CarruselContainer from '../components/CarruselContainer';
import CarruselItems from '../components/CarruselItems';
import Categories from '../components/Categories';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <div>
      <Search />
      { myList.length > 0 && (
        <Categories titulo='Mi Lista'>
          <CarruselContainer>
            {myList.map((item) => <CarruselItems key={item.id} {...item} />) }
          </CarruselContainer>
        </Categories>
      )}
      <Categories titulo='Tendencia'>
        <CarruselContainer>
          {trends.map((item) => <CarruselItems key={item.id} {...item} />) }
        </CarruselContainer>
      </Categories>
      <Categories titulo='Originales de Platzi Video'>
        <CarruselContainer>
          {originals.map((item) => <CarruselItems key={item.id} {...item} />) }
        </CarruselContainer>
      </Categories>
    </div>
  );
};

const mapStatecToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStatecToProps, null)(Home);
