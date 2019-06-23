import React, {useState, useEffect} from "react";
import CurrencyCheckerTabs from '../CurrencyCheckerTabs';

import cn from 'classnames';

import styles from './styles.module.scss';

function FilterSectionCurrencyChecker(props) {
	const {
		data,
		type = '',
		onSectionUpdate = Function.prototype
	} = props;
	//
	const [values, updateValues] = useState({});
	const onCurrencyCheckerGroupChange = (e) => {
		const trigger = e.currentTarget;
		const id = trigger.id;
		let newState = {};

		for (let rowKey in values) {
			newState = {
				...newState,
				[rowKey]: {
					...values[rowKey],
					isChecked: rowKey === id
				}
			}
		}

		updateValues(newState);
		onSectionUpdate({
			type,
			data: newState
		});
	};

	useEffect(() => {
		let state = {};

		data.forEach((rowData, key) => {
			state[rowData.id] = {
				...rowData
			};
		});

		updateValues(state);
	}, []);


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
