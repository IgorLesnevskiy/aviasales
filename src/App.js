import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO priceConverter - приводит цену к локали; переводит цену из одно валюты в другую;
// TODO не нормализовать данные, считаем, что они ок
// TODO преобразование аднных под фильтр

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
