import React from 'react';
import './App.css';
import { Header } from './components/headers/header';
import { Footer } from './components/footers/footer';

const App = () => (
  <div> 
    <Header></Header>
    <Footer companyinfo="demo" year="2020"></Footer>
 </div>
);

export default App;
