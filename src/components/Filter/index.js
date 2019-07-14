import React, {useCallback, useReducer} from "react";
import styles from './styles.module.scss';
import FilterSectionWrapper from "../FilterSectionWrapper";

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
				<FilterSectionWrapper
					{...sectionData}
					// onSectionUpdate={onSectionUpdate}
				/>
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