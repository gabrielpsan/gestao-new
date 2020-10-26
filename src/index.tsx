import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './components/header';
import Pessoa from './components/Cadastro/Pessoa';
import Login from './components/login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Pessoa />
    {/* <IndexCadastro /> */}
    {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
