import React, { useState, useEffect } from "react";

import CurrencyViewer from '../CurrencyViewer';
import {getPriceConverter} from "../../tools";

import styles from './styles.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cPriceConverter = getPriceConverter();

function PriceButton(props){
	const {
		currency = 'RUB',
		baseCurrency = 'RUB',
		baseAmount = 0,
	} = props;

	const [isLoading, setLoadingStatus] = useState(true);
	const [convertedAmount, setConvertedAmount] = useState(baseAmount);

	const loader = <div className={styles["loading"]}>
		<FontAwesomeIcon icon={['fas', 'spinner']}/>
	</div>;

	const content = <div className={styles["button__text"]}>
		Купить за <CurrencyViewer
		currency={currency}
		amount={convertedAmount}/>
	</div>;

	useEffect(() => {
		setLoadingStatus(true);

		cPriceConverter.convertPrice(baseCurrency, currency, baseAmount).then((result) => {
			setConvertedAmount(result);
			setLoadingStatus(false);
		});
	}, [props.currency]);

	return (
		<a href={"#"} className={styles["button"]}>
			{isLoading ? loader : content}
		</a>
	)
}

export default PriceButton;
