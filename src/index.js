import { BigDivEnergyProvider } from 'big-div-energy';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BigDivEnergyProvider
    config={{
      spacing: {
        none: '0rem',
        xxs: '.5rem',
        xs: '.75rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '3rem',
        xl: '4rem',
      },
      breakpoints: [576, 768],
    }}
  >
    <App />
  </BigDivEnergyProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
