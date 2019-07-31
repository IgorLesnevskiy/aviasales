import React, {useCallback, useLayoutEffect, useState} from "react";
import {forEachObjIndexed} from "ramda";

import FilterSectionWrapper from "../FilterSectionWrapper";

import './styles.scss';

const filterSection = ({key, sectionData}) => {
	return (
		<React.Fragment key={key}>
			<div className={"filter__section"}>
				<FilterSectionWrapper
					{...sectionData}
				/>
			</div>
		</React.Fragment>
	);
};

function Filter(props) {
	const {
		onFilterUpdate = Function.prototype,
		isLoading = true,
		data = {}
	} = props;

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

				onFilterUpdate({
					[code]: {
						type,
						code,
						value: checkedValues
					}
				});

				break;
			default:
				console.error('Unknown filter case');
				break;
		}
	}, [onFilterUpdate]);

	const [sections, updateSections] = useState([]);

	useLayoutEffect(() => {
		const result = [];

		if (isLoading) {
			const sectionData = {
				isLoading
			};

			result.push(
				filterSection({
					sectionData
				})
			)
		} else {
			forEachObjIndexed((item, key) => {
				const sectionData = {
					...item,
					isLoading,
					onSectionUpdate,
				};

				result.push(
					filterSection({key, sectionData})
				)
			}, data);
		}

		updateSections(result);
	}, [isLoading, data]);


	return (
		<form className={"filter"}>
			{sections}
		</form>
	)
}

export default Filter;