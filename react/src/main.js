/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
