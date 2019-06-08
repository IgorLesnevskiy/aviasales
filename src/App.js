import React from 'react';

import Filter from './components/Filter';
import TicketsList from './components/TicketsList';

import './App.scss';

import logo from "./resources/images/logo.svg";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);


// TODO priceConverter - приводит цену к локали; переводит цену из одно валюты в другую;
// TODO не нормализовать данные, считаем, что они ок
// TODO преобразование аднных под фильтр
// TODO генерация иконочного шрифта

function App() {
  return (
    <div className={"page"}>
      <div className={"page__inner"}>
        <div className={"page__logo"}>
          <a href="https://aviasales.ru" target={"_blank"}>
            <img src = {logo} alt={"Aviasales"} title={"Aviasales"} />
          </a>
        </div>
        <div className={"page__content"}>
          <div className={"layout"}>
            <div className={"layout__sidebar"}>
              <Filter/>
            </div>

            <div className={"layout__body"}>
              <TicketsList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
