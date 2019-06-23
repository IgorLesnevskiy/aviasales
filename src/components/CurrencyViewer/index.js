import React from "react";

import styles from './styles.module.scss';
import {utils} from '../../tools';

const LOCALE_MAP = {
	"RUB": "ru",
	"USD": "us",
	"EUR": "eu",
};

function CurrencyViewer(props) {
	const {
		currency = 'RUB',
		amount = 0
	} = props;

	return (
		 <span className={styles["currency-viewer"]} data-type={currency}>
			 {utils.convertToLocalPrice(amount, LOCALE_MAP[currency])}
		 </span>
	)
}

export default CurrencyViewer;
