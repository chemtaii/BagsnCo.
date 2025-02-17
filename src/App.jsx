import React from 'react';
import WebRoutes from './WebRoutes';
import {Provider} from 'react-redux';
import { makeStore } from './Store';
import './styles.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const store = makeStore();

export default function App () {

  return (
    <Provider store={store}>
      <WebRoutes/>
    </Provider>

   
  );
}


