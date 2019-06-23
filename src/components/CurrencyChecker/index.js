import React, {useState, useEffect} from "react";
import {utils} from '../../tools';

import styles from './styles.module.scss';

function CurrencyChecker(props) {
	const {
		id,
		value = '',
		name = 'currency',
		label = 'RUB',
		isChecked = false,
		onChange = Function.prototype
	} = props;

	const [uniqId] = useState(id || utils.getUniqId());

	return (
		<div className={styles["currency-checker"]}>
			<input
				type="radio"
				value={value}
				name={name}
				id={uniqId}
				className={styles["currency-checker__input"]}
				checked={isChecked}
				onChange = {onChange}
			/>

			<label htmlFor={uniqId} className={styles["currency-checker__label"]}>{label}</label>
		</div>
	)
}

export default CurrencyChecker;
