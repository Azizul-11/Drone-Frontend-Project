import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css"
import Nav from './Component/Nav';
import Hero from './Component/Hero';
import Product from './Component/Product';
import News from './Component/News';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Hero />
        <Product />
        <News/>
      </BrowserRouter>
    </>
  );
}

export default App;
