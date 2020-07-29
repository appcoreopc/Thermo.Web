import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import StoreReducers from './redux/store'
import { Home } from './pages/home/home';

const App = () => (

  <Provider store={StoreReducers}>
      <Home></Home>
  </Provider>

);

export default App;
