import React, {useState} from 'react';

import Filter from './components/Filter';
import TicketsList from './components/TicketsList';

import './App.scss';

import logo from "./resources/images/logo.svg";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

// TODO priceConverter - приводит цену к локали; переводит цену из одно валюты в другую; https://fixer.io/documentation
// TODO не нормализовать данные, считаем, что они ок
// TODO преобразование аднных под фильтр
// TODO генерация иконочного шрифта
// TODO при фильтрации билетов видно дергание цены в кнопке цены. Кнопка не перерисовывается, в ней просто заменяется цена, и это видно
// TODO preloader фильтра и данных
// TODO разобраться почему стейт не собирается целиком в фильтре при загружке страницы

const defaultTicketsList = [{
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "16:20",
  "arrival_date": "12.05.18",
  "arrival_time": "22:10",
  "carrier": "TK",
  "stops": 3,
  "price": 12400,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:20",
  "arrival_date": "12.05.18",
  "arrival_time": "23:50",
  "carrier": "S7",
  "stops": 1,
  "price": 13100,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "12:10",
  "arrival_date": "12.05.18",
  "arrival_time": "18:10",
  "carrier": "SU",
  "stops": 0,
  "price": 15300,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:00",
  "arrival_date": "12.05.18",
  "arrival_time": "23:30",
  "carrier": "TK",
  "stops": 2,
  "price": 11000,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "12:10",
  "arrival_date": "12.05.18",
  "arrival_time": "20:15",
  "carrier": "BA",
  "stops": 3,
  "price": 13400,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "9:40",
  "arrival_date": "12.05.18",
  "arrival_time": "19:25",
  "carrier": "SU",
  "stops": 3,
  "price": 12450,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:10",
  "arrival_date": "12.05.18",
  "arrival_time": "23:45",
  "carrier": "TK",
  "stops": 1,
  "price": 13600,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "6:10",
  "arrival_date": "12.05.18",
  "arrival_time": "15:25",
  "carrier": "TK",
  "stops": 0,
  "price": 14250,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "16:50",
  "arrival_date": "12.05.18",
  "arrival_time": "23:35",
  "carrier": "SU",
  "stops": 1,
  "price": 16700,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}, {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "6:10",
  "arrival_date": "12.05.18",
  "arrival_time": "16:15",
  "carrier": "S7",
  "stops": 0,
  "price": 17400,
  "priceCurrency": "RUB",
  "basePriceCurrency": "RUB",
}];

function App() {
  const [filteredTickets, setFilterTickets] = useState(defaultTicketsList);
  const [filterParams, setFilterParams] = useState({});

  const onFilterUpdate = function(filterParams) {
    let filtered = [...defaultTicketsList];

    for (let paramKey in filterParams) {
      if (!filterParams.hasOwnProperty(paramKey)) {
        return;
      }

      const param = filterParams[paramKey];
      const {
        type,
        value,
      } = param;

      switch (type) {
        case "currencyChecker":
          filtered.forEach((ticket) => {
            ticket.priceCurrency = value;
          });

          break;
        case "checkboxesList":
          filtered = filtered.filter((ticket) => {
            if (!value || !value.length) {
              return true;
            }
            if (typeof ticket[paramKey] === "undefined") {
              return true;
            }

            return (Array.isArray(value))
                ? value.some(i => String(i) === String(ticket[paramKey]))
                : String(value) === String(ticket[paramKey]);
          });

          break;
      }
    }

    console.log(filterParams);
    setFilterTickets(filtered);
    setFilterParams(filterParams);
  };

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
              <Filter onFilterUpdate={onFilterUpdate}/>
            </div>

            <div className={"layout__body"}>
              <TicketsList tickets = {filteredTickets}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
