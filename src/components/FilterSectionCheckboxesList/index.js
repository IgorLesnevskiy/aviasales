import React, {useReducer, useCallback} from "react";
import CheckboxLine from '../CheckboxLine';

import {mapObjIndexed, map, values, mergeLeft, compose} from "ramda";

import styles from './styles.module.scss';

const itemsList = (item, key) => (
	<div className={"filter-checkboxes-list__row"} key={key}>
		<CheckboxLine
			{...item}
		/>
	</div>
);

const extendItemsByExtraParams = (items, extra = {}) => map(item => mergeLeft(item, extra), items);

const getItems = compose(
	values,
	mapObjIndexed(itemsList),
	extendItemsByExtraParams
);

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
			code: action.payload.name,
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
		const name = trigger.name;
		const value = trigger.value;
		const isChecked = trigger.checked;

		if (value === 'all') {
			dispatch({
				type: "checkAll",
				payload: {
					name,
					isChecked,
				}
			});
		} else {
			dispatch({
				type: "checkItem",
				payload: {
					id,
					name,
					value,
					isChecked,
				}
			});
		}
	},[]);

	return (
		<div className={styles["filter-checkboxes-list"]}>
			{getItems(values, {
				onChange: onCheckboxesGroupChange,
			})}
		</div>
	)
}

export default FilterSectionCheckboxesList;
