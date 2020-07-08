import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import StoreReducers from './redux/store'
import { Home } from './pages/home/home';
import SetupUser  from './components/users/setupuser';

const App = () => (

  <Provider store={ StoreReducers }>
     <div>
      <Home></Home>
      <SetupUser> </SetupUser>
    </div>
    </Provider>
   
);

export default App;
