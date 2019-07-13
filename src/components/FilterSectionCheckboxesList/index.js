import React, {useReducer, useCallback} from "react";
import CheckboxLine from '../CheckboxLine';

import styles from './styles.module.scss';

function FilterSectionCheckboxesList(props) {
	const {
		data,
		type = '',
		onSectionUpdate = Function.prototype
	} = props;

	function reducer(state, action) {
		let updatedState = state;

		switch (action.type) {
			case "checkAll":
			{
				const newState = {};
				const isChecked = Boolean(action.payload.isChecked);

				for (let rowKey in state) {
					if (state.hasOwnProperty(rowKey)) {
						newState[rowKey] = {
							...state[rowKey],
							isChecked
						}
					}
				}

				updatedState = {
					...updatedState,
					...newState
				};
			}

				break;
			case "checkItem":
			{
				const id = action.payload.id;
				const isChecked = Boolean(action.payload.isChecked);

				updatedState = {
					...updatedState,
					[id]: {
						...state[id],
						isChecked
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
			data: updatedState
		});

		return updatedState;
	}

	const [values, dispatch] = useReducer(
		reducer,
		data
	);

	const onCheckboxesGroupChange = useCallback((e) => {
		const trigger = e.currentTarget;
		const id = trigger.id;
		const value = trigger.value;

		if (value === 'all') {
			dispatch({
				type: "checkAll",
				payload: {
					isChecked: trigger.checked,
				}
			});
		} else {
			dispatch({
				type: "checkItem",
				payload: {
					id,
					isChecked: trigger.checked,
				}
			});
		}
	},[]);

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
