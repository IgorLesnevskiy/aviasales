import React, { useReducer, useEffect, useCallback } from "react";

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

	const [state, updateState] = useReducer(
		(state, newState) => ({...state, ...newState}),
		{isLoading: true, convertedAmount: baseAmount}
	);

	const convertPrice = useCallback(() => {
		return cPriceConverter.convertPrice(baseCurrency, currency, baseAmount)
	}, [currency, baseCurrency, baseAmount]);

	const loader = <div className={styles["loading"]}>
		<FontAwesomeIcon icon={['fas', 'spinner']}/>
	</div>;

	const content = <div className={styles["button__text"]}>
		Купить за <br/>
		<CurrencyViewer
			currency={currency}
			amount={state.convertedAmount}
		/>
	</div>;

	useEffect(() => {
		let isSubscribed = true;

		updateState({
			isLoading: false
		});

		convertPrice()
			.then((result) => {
				if (isSubscribed) {
					updateState({
						isLoading: false,
						convertedAmount: result
					});
				}
			});

		return () => isSubscribed = false;
	}, [convertPrice]);

	return (
		<a href={"#"} className={styles["button"]}>
			{state.isLoading ? loader : content}
		</a>
	)
}

export default PriceButton;
