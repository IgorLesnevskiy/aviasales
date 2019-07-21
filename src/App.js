import React, {useCallback, useEffect, useReducer} from 'react';
import cn from 'classnames';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {useDataApi} from './hooks';
import Filter from './components/Filter';
import TicketsList from './components/TicketsList';
import Toolbar from './components/Toolbar';
import {CFilterBuilder, availableCurrencies} from "./tools";
import {NightModeContext} from "./context";

import './App.scss';
import logo from "./resources/images/logo.svg";

library.add(fas);

const fetchUrl = "https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json";
const cFilterBuilder = new CFilterBuilder();

// TODO вынести функциии обработки и фильтрации билетов в отдельный класс
// TODO вынести логотип в отдельный компонент
// TODO preloader фильтра и данных
// TODO пустые данные при предзагрузки
// TODO генерация иконочного шрифта
// TODO при фильтрации билетов видно дергание цены в кнопке цены. Кнопка не перерисовывается, в ней просто заменяется цена, и это видно

function filterTickets(tickets = [], filterParams = {}) {
	if (!tickets.length) {
		return [];
	}

	let filtered = [...tickets];

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
}

function processTickets(tickets) {
	const currency = (availableCurrencies.default && availableCurrencies.default.title) || 'RUB';

	return tickets.map(ticket => {
		return {
			...ticket,
			priceCurrency: currency,
			basePriceCurrency: currency,
		}
	})
}

function App() {
	const [loadedData, doFetch] = useDataApi(
		fetchUrl,
		{},
	);

	const [state, dispatch] = useReducer((currentState, action) => {
		switch (action.type) {
			case "SET_NIGHT_MODE":
				return {
					...currentState,
					nightMode: action.payload.nightMode,
				};
			case "FETCH_INIT":
				return {
					...currentState,
					isLoading: true,
				};
			case "FETCH_SUCCESS":
				const processedTickets = processTickets(action.payload.tickets);

				const updatedTickets = [
					...currentState.tickets,
					...processedTickets
				];

				const {filtersData, defaultFiltersValues} = cFilterBuilder.buildFilter(updatedTickets);

				return {
					...currentState,
					tickets: updatedTickets,
					filtersData,
					filterParams: (currentState.tickets && currentState.tickets.length)
						? currentState.filterParams
						: defaultFiltersValues,
					filteredTickets: filterTickets(updatedTickets, currentState.filterParams),
					isLoading: false,
				};
			case "FILTER_UPDATE":
				const updatedFilter = {
					...currentState.filterParams,
					...action.payload.filterParams
				};

				return {
					...currentState,
					filteredTickets: filterTickets(currentState.tickets, updatedFilter),
					filterParams: updatedFilter
				};
			default:
				console.error('Unknown reducer case');
		}
	}, {
		nightMode: false,
		tickets: [],
		filteredTickets: [],
		filterParams: {},
		filtersData: {},
		isLoading: false,
	});

	const onFilterUpdate = useCallback((filterParams) => {
		dispatch({
			type: "FILTER_UPDATE",
			payload: {
				filterParams
			}
		});
	}, []);

	const onToggleNightMode = useCallback((e) => {
		const trigger = e.currentTarget;
		const isChecked = trigger.checked;

		dispatch({
			type: "SET_NIGHT_MODE",
			payload: {
				nightMode: isChecked
			}
		});
	});

	const toolbarItems = {
		nightModeToggle: {
			onChange: onToggleNightMode,
			turnedOnIconClass: 'sun',
			turnedOffIconClass: 'moon',
		}
	};

	const pageClasses = cn({
		page: true,
		"theme--night-mode": state.nightMode
	});

	useEffect(() => {
		dispatch({
			type: "FETCH_SUCCESS",
			payload: {
				tickets: loadedData.data.tickets || []
			}
		});
	}, [loadedData]);

	useEffect(() => {
		doFetch(fetchUrl);
	}, []);

	return (
		<div className={pageClasses}>
			<div className={"page__inner"}>
				<div className={"page__logo"}>
					<a href="https://aviasales.ru" target={"_blank"}>
						<img src={logo} alt={"Aviasales"} title={"Aviasales"}/>
					</a>
				</div>
				<div className={"page__content"}>
					<div className={"layout"}>

						<div className={"layout__toolbar"}>
							<Toolbar items={toolbarItems}></Toolbar>
						</div>

						<div className={"layout__content"}>
							<NightModeContext.Provider value={state.nightMode}>

								<div className={"layout__sidebar"}>
									<Filter
										onFilterUpdate={onFilterUpdate}
										data={state.filtersData}
									/>
								</div>

								<div className={"layout__body"}>
									<TicketsList
										tickets={state.filteredTickets}
										isLoading={state.isLoading}
									/>
								</div>

							</NightModeContext.Provider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
