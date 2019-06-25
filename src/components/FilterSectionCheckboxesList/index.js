import React, {useState, useEffect} from "react";
import CheckboxLine from '../CheckboxLine';

import styles from './styles.module.scss';

function FilterSectionCheckboxesList(props) {
	const {
		data,
		type = '',
		onSectionUpdate = Function.prototype
	} = props;

	const [values, updateValues] = useState({});
	const onCheckboxesGroupChange = (e) => {
		const trigger = e.currentTarget;
		const id = trigger.id;
		const value = trigger.value;
		let newState = {};

		if (value === 'all') {
			for (let rowKey in values) {
				newState = {
					...newState,
					[rowKey]: {
						...values[rowKey],
						isChecked: trigger.checked
					}
				}
			}
		} else {
			newState = {
				...values,
				[id]: {
					...values[id],
					isChecked: trigger.checked
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
		let newState = {};

		data.forEach((rowData, key) => {
			newState[rowData.id] = {
				...rowData
			};
		});

		updateValues(newState);
		onSectionUpdate({
			type,
			data: newState
		});
	}, []);


	let rows = [];
	for (let rowKey in values) {
		rows.push(
			<div className={styles["filter-checkboxes-list__row"]} key={rowKey}>
				<CheckboxLine
					{...values[rowKey]}
					onChange = {onCheckboxesGroupChange}
				/>
			</div>
		)
	}

	return (
		<div className={styles["filter-checkboxes-list"]}>
			{rows}
		</div>
	)
}

export default FilterSectionCheckboxesList;
