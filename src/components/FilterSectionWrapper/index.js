import React, {useState, useEffect} from "react";
import FilterSectionCheckboxesList from "../FilterSectionCheckboxesList";
import FilterSectionCurrencyChecker from "../FilterSectionCurrencyChecker";

import styles from './styles.module.scss';

function FilterSectionWrapper(props) {
		const {
			title,
			type,
			data,
			onSectionUpdate = Function.prototype
		} = props;

		let innerItem = null;
		if (type === 'checkboxesList') {
			innerItem = <FilterSectionCheckboxesList
				data = {data}
				type = {type}
				onSectionUpdate = {onSectionUpdate}
			/>
		} else  if (type === 'currencyChecker') {
			innerItem = <FilterSectionCurrencyChecker
				data = {data}
				type = {type}
				onSectionUpdate = {onSectionUpdate}
			/>
		}

		return (
			<div className={styles["filter-section-wrapper"]}>
				<div className={styles["filter-section-wrapper__title"]}>{title}</div>
				<div className={styles["filter-section-wrapper__body"]}>
					{innerItem}
				</div>
			</div>
		)
}

export default FilterSectionWrapper;
