import React, {useCallback, useReducer} from "react";
import CurrencyCheckerTabs from '../CurrencyCheckerTabs';

import styles from './styles.module.scss';

function FilterSectionCurrencyChecker(props) {
	const {
		data,
		type = '',
		onSectionUpdate = Function.prototype
	} = props;

	function reducer(state, action) {
		let updatedState = state;

		switch (action.type) {
			case "checkItem":
				{
					const id = action.payload.id;

					for (let rowKey in state) {
						if (state.hasOwnProperty(rowKey)) {
							updatedState = {
								...updatedState,
								[rowKey]: {
									...state[rowKey],
									isChecked: rowKey === id
								}
							}
						}
					}
				}

				break;
			default:
				console.error("Unknown dispatch case");
				break;
		}

		onSectionUpdate({
			type,
			code: action.payload.name,
			data: updatedState
		});

		return updatedState;
	}

	const [values, dispatch] = useReducer(
		reducer,
		data
	);

	const onCurrencyCheckerGroupChange = useCallback((e) => {
		const trigger = e.currentTarget;

		const id = trigger.id;
		const name = trigger.name;

		dispatch({
			type: "checkItem",
			payload: {
				id,
				name
			}
		});
	},[]);

	let rows = [];
	for (let rowKey in values) {
		rows.push(values[rowKey]);
	}

	return (
		<div className={styles["filter-currency-checker-list"]}>
			<div className={styles["filter-currency-checker-list__row"]}>
				<CurrencyCheckerTabs
					items={rows}
					onChange={onCurrencyCheckerGroupChange}
				/>
			</div>
		</div>
	)
}

export default FilterSectionCurrencyChecker;
