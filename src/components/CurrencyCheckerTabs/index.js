import React from "react";
import CurrencyChecker from "../CurrencyChecker";

import styles from './styles.module.scss';

// TODO вероятно нужно отказываться от css-модулей, т.к. сложно воздействовать на nested-элементы

function CurrencyCheckerTabs(props) {
	const {
		items = [],
		onChange = Function.prototype
	} = props;

	const listOfItems = items.map(item =>
		<li className={styles["currency-checker-tabs__item"]} key={item.value}>
			<CurrencyChecker
				{...item}
				onChange = {onChange}
			/>
		</li>
	);
	return (
		<ul className={styles["currency-checker-tabs"]}>
			{listOfItems}
		</ul>
	)
}

export default CurrencyCheckerTabs;
