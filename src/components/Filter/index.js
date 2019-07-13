import React, {useCallback, useReducer} from "react";
import styles from './styles.module.scss';
import FilterSectionWrapper from "../FilterSectionWrapper";

// const data = [
// 	{
// 		title: "Валюта",
// 		type: "currencyChecker",
// 		data: [
// 			{
// 				label: "RUB",
// 				value: "RUB",
// 				name: "currency",
// 				isChecked: false,
// 				// id: utils.getUniqueId(),
// 				id: "unique1",
// 			},
// 			{
// 				label: "USD",
// 				value: "USD",
// 				name: "currency",
// 				isChecked: false,
// 				// id: utils.getUniqueId(),
// 				id: "unique2",
// 			},
// 			{
// 				label: "EUR",
// 				value: "EUR",
// 				name: "currency",
// 				isChecked: true,
// 				// id: utils.getUniqueId(),
// 				id: "unique3",
// 			},
// 		]
// 	},
// 	{
// 		title: "Количество пересадок",
// 		type: "checkboxesList",
// 		data: [
// 			{
// 				only: false,
// 				name: "stops",
// 				value: "all",
// 				label: "Все",
// 				// id: utils.getUniqueId(),
// 				id: "unique4",
// 				isChecked: false,
// 			},
// 			{
// 				label: "Без пересадок",
// 				name: "stops",
// 				value: "0",
// 				// id: utils.getUniqueId(),
// 				id: "unique5",
// 				isChecked: false,
// 			},
// 			{
// 				label: "1 пересадка",
// 				name: "stops",
// 				value: "1",
// 				// id: utils.getUniqueId(),
// 				id: "unique6",
// 				isChecked: true,
// 			},
// 			{
// 				label: "2 пересадки",
// 				name: "stops",
// 				value: "2",
// 				// id: utils.getUniqueId(),
// 				id: "unique7",
// 				isChecked: false,
// 			},
// 			{
// 				label: "3 пересадки",
// 				name: "stops",
// 				value: "3",
// 				// id: utils.getUniqueId(),
// 				id: "unique8",
// 				isChecked: false,
// 			}
// 		]
// 	},
// ];

function Filter(props) {
	const {
		onFilterUpdate = Function.prototype,
		data = []
	} = props;

	const [formData, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case "update":
				{
					const result = {
						...state,
						...action.data
					};

					onFilterUpdate(result);
					return result;
				}
			default:
				console.error('Unknown dispatch case');
				break;
		}
	}, {});

	const onSectionUpdate = useCallback(sectionData => {
		const {
			type,
			data
		} = sectionData;

		if (!type || !data || !Object.keys(data).length) {
			return false;
		}

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

				dispatch({
					type: "update",
					data: {
						[name]: {
							type,
							value: checkedValues.length > 1 ? checkedValues : checkedValues.pop()
						}
					}
				});

				break;
			default:
				console.error('Unknown filter case');
				break;
		}
	}, [onFilterUpdate]);

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