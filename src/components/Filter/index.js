import React, {useCallback, useReducer} from "react";
import styles from './styles.module.scss';
import FilterSectionWrapper from "../FilterSectionWrapper";

function Filter(props) {
	const {
		onFilterUpdate = Function.prototype,
		data = {}
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
			code,
			data
		} = sectionData;

		if (!type || !code || !data || !Object.keys(data).length) {
			return false;
		}

		switch (type) {
			case 'checkboxesList':
			case 'currencyChecker':
				const checkedValues = Object.values(data)
					.filter(i => i.isChecked && i.value !== 'all')
					.map(i => i.value);

				dispatch({
					type: "update",
					data: {
						[code]: {
							type,
							code,
							value: checkedValues
						}
					}
				});

				break;
			default:
				console.error('Unknown filter case');
				break;
		}
	}, [onFilterUpdate]);

	const sections = [];
	for (let paramName in data) {
		if (data.hasOwnProperty(paramName)) {
			const sectionData = data[paramName];

			sections.push(
				<React.Fragment key={paramName}>
					<div className={styles.filter__section}>
						<FilterSectionWrapper
							{...sectionData}
							onSectionUpdate={onSectionUpdate}
						/>
					</div>
				</React.Fragment>
			)
		}
	}

	return (
		<form className={styles.filter}>
			{sections}
		</form>
	)
}

export default Filter;