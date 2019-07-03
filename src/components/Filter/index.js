import React, {useState, useCallback, useReducer} from "react";
import {utils} from '../../tools';
import styles from './styles.module.scss';
import FilterSectionWrapper from "../FilterSectionWrapper";

const data = [
	{
		title: "Валюта",
		type: "currencyChecker",
		data: [
			{
				label: "RUB",
				value: "RUB",
				name: "currency",
				isChecked: true,
				// id: utils.getUniqId(),
				id: "unique1",
			},
			{
				label: "USD",
				value: "USD",
				name: "currency",
				isChecked: false,
				// id: utils.getUniqId(),
				id: "unique2",
			},
			{
				label: "EUR",
				value: "EUR",
				name: "currency",
				isChecked: false,
				// id: utils.getUniqId(),
				id: "unique3",
			},
		]
	},
	{
		title: "Количество пересадок",
		type: "checkboxesList",
		data: [
			{
				only: false,
				name: "stops",
				value: "all",
				label: "Все",
				// id: utils.getUniqId(),
				id: "unique4",
				isChecked: false,
			},
			{
				label: "Без пересадок",
				name: "stops",
				value: "0",
				// id: utils.getUniqId(),
				id: "unique5",
				isChecked: false,
			},
			{
				label: "1 пересадка",
				name: "stops",
				value: "1",
				// id: utils.getUniqId(),
				id: "unique6",
				isChecked: false,
			},
			{
				label: "2 пересадки",
				name: "stops",
				value: "2",
				// id: utils.getUniqId(),
				id: "unique7",
				isChecked: false,
			},
			{
				label: "3 пересадки",
				name: "stops",
				value: "3",
				// id: utils.getUniqId(),
				id: "unique8",
				isChecked: false,
			}
		]
	},
];

function Filter(props) {
	const [formData, setFormData] = useState({});
	const {
		onFilterUpdate = Function.prototype
	} = props;

	const onSectionUpdate = sectionData => {
		const {
			type,
			data
		} = sectionData;

		if (!type || !data || !Object.keys(data).length) {
			return false;
		}

		let result = {};

		switch (type) {
			case 'checkboxesList':
			case 'currencyChecker':
				const name = Object.values(data)[0].name || '';
				const checkedValues = Object.values(data)
					.filter(i => i.isChecked && i.value !== 'all')
					.map(i => i.value);

				if (!name) {
					return false;
				}

				result = {
					...formData,
					[name]: {
						type,
						value: checkedValues.length > 1 ? checkedValues : checkedValues.pop()
					}
				};

				setFormData(result);
				onFilterUpdate(result);

				break;
			default:
				console.error('Unknown filter case');
				break;
		}
	};

	const sections = data.map((sectionData, key) => {
		return <React.Fragment key={key}>
			<div className={styles.filter__section}>
				<FilterSectionWrapper {...sectionData}  onSectionUpdate={onSectionUpdate}/>
			</div>
		</React.Fragment>
	});

	return (
		<form className={styles.filter}>
			{sections}
		</form>
	)
}

export default Filter;