import React from 'react';
import HeaderPage from './HeaderPage';

const Home = () => {


  return(
  <div className="home">
    <div className="container">
      <HeaderPage num={"01"} name={"Home"}/>
      <div>
        <h1>Julia <br /> Casamitjana</h1>
        <hr className="base__hr"/>
      </div>
    </div>
  </div>
)};


export default Home;
