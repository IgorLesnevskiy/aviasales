import React, {useCallback, useEffect, useReducer} from 'react';
import cn from 'classnames';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {useDataApi} from './hooks';
import Filter from './components/Filter';
import TicketsList from './components/TicketsList';
import Toolbar from './components/Toolbar';
import Logo from './components/Logo';
import {CFilterBuilder, CTicketsProcessor} from "./tools";
import {NightModeContext} from "./context";

import './App.scss';
import logo from "./resources/images/logo.svg";

library.add(fas);

const fetchUrl = "https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/DEPRECATED_aviasales/tickets.json";
const cFilterBuilder = new CFilterBuilder();

// TODO написать абстракцию для загрузки данных с удаленного сервера
// TODO генерация иконочного шрифта
// TODO при фильтрации билетов видно дергание цены в кнопке цены. Кнопка не перерисовывается, в ней просто заменяется цена, и это видно

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
				const processedTickets = CTicketsProcessor.processTickets(action.payload.tickets);

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
					filteredTickets: CTicketsProcessor.filterTickets(updatedTickets, currentState.filterParams),
					isLoading: false,
				};
			case "FETCH_FAILURE":
				return {
					...currentState,
					isError: true,
				};
			case "FILTER_UPDATE":
				const updatedFilter = {
					...currentState.filterParams,
					...action.payload.filterParams
				};

				return {
					...currentState,
					filteredTickets: CTicketsProcessor.filterTickets(currentState.tickets, updatedFilter),
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
		isLoading: true,
		isError: false,
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

	useEffect(() => {
		if (loadedData.isFetched) {

			if (loadedData.isError) {
				dispatch({
					type: "FETCH_FAILURE",
					payload: {
						tickets: loadedData.data.tickets || []
					}
				});
			} else {
				dispatch({
					type: "FETCH_SUCCESS",
					payload: {
						tickets: loadedData.data.tickets || []
					}
				});
			}
		}
	}, [loadedData]);

	useEffect(() => {
		doFetch(fetchUrl);
	}, []);

	return (
		<div className={cn({
			page: true,
			"theme--night-mode": state.nightMode
		})}>
			<div className={"page__inner"}>
				<div className={"page__logo"}>
					<Logo
						url={"https://aviasales.ru"}
						imageSrc={logo}
						alt={"Aviasales"}
						title={"Aviasales"}
					/>
				</div>
				<div className={"page__content"}>
					<div className={"layout"}>

						<div className={"layout__toolbar"}>
							<Toolbar items={toolbarItems} />
						</div>

						<div className={"layout__content"}>
							<NightModeContext.Provider value={state.nightMode}>

								<div className={"layout__sidebar"}>
									<Filter
										onFilterUpdate={onFilterUpdate}
										data={state.filtersData}
										isLoading={state.isLoading}
									/>
								</div>

								<div className={"layout__body"}>
									{state.isError
										? "Ошибка загрузки данных"
										: <TicketsList
											tickets={state.filteredTickets}
											isLoading={state.isLoading}
										/>}
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
