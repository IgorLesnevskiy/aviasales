import React, {useState, useCallback, useEffect, useMemo} from 'react';

import Filter from './components/Filter';
import TicketsList from './components/TicketsList';

import './App.scss';

import logo from "./resources/images/logo.svg";

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {utils, CFilterBuilder} from "./tools";

library.add(fas);

// TODO не нормализовать данные, считаем, что они ок
// TODO генерация иконочного шрифта
// TODO при фильтрации билетов видно дергание цены в кнопке цены. Кнопка не перерисовывается, в ней просто заменяется цена, и это видно
// TODO preloader фильтра и данных

const defaultTicketsList = [
	{
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
	}
];

const cFilterBuilder = new CFilterBuilder();
const {filtersData, defaultFiltersValues} = cFilterBuilder.buildFilter(defaultTicketsList);

function App() {
	const [filterParams, setFilterParams] = useState(defaultFiltersValues);
	const [isLoading, setLoadingStatus] = useState(true);

	const filteredTickets = useMemo((ticketsList = defaultTicketsList) => {
		let filtered = [...ticketsList];

		for (let paramName in filterParams) {
			if (filterParams.hasOwnProperty(paramName)) {
				const param = filterParams[paramName];
				const {
					code,
					type,
					value,
				} = param;

				switch (type) {
					case "currencyChecker":
						filtered.forEach((ticket) => {
							if (ticket[code]) {
								ticket[code] = value;
							}
						});

						break;
					case "checkboxesList":
						filtered = filtered.filter((ticket) => {
							if (!value || (Array.isArray(value) && !value.length)) {
								return true;
							}

							if (typeof ticket[code] === "undefined") {
								return true;
							}

							return (Array.isArray(value))
								? value.some(i => String(i) === String(ticket[code]))
								: String(value) === String(ticket[code]);
						});

						break;
					default:
						console.error('Unknown filter case');
				}
			}
		}

		return filtered;
	}, [filterParams]);

	const onFilterUpdate = useCallback((filterParams) => {
		setFilterParams((oldState) => {
			return {
				...oldState,
				...filterParams
			}
		});
	}, []);

	useEffect(() => {
		setLoadingStatus(false);
	}, []);

	return (
		<div className={"page"}>
			<div className={"page__inner"}>
				<div className={"page__logo"}>
					<a href="https://aviasales.ru" target={"_blank"}>
						<img src={logo} alt={"Aviasales"} title={"Aviasales"}/>
					</a>
				</div>
				<div className={"page__content"}>
					<div className={"layout"}>

						<div className={"layout__sidebar"}>
							<Filter
								onFilterUpdate={onFilterUpdate}
								data={filtersData}
							/>
						</div>

						<div className={"layout__body"}>
							<TicketsList
								tickets={filteredTickets}
								isLoading={isLoading}
							/>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
